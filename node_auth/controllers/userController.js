const UserModel = require('../model/User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require('../config.js');
const otpGenerator = require('otp-generator');


exports.verifyUser = async (req,res,next) => {
    try {
        
        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({ username });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}

exports.register = async (req,res) => {
    try {
      const { username, password, profile, email } = req.body;
  
      const existUsername = await UserModel.findOne({ username });
      if (existUsername) {
        return res.status(409).json({ error: "Veuillez utiliser un nom d'utilisateur unique." });
      }
  
      const existEmail = await UserModel.findOne({ email });
      if (existEmail) {
        return res.status(409).json({ error: "Veuillez utiliser un email unique." });
      }
  
      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur
      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || '',
        email
      });
  
      // Enregistrer l'utilisateur dans la base de données
      const savedUser = await user.save();
  
      res.status(201).json({ msg: "Utilisateur enregistré avec succès." , savedUser });
    } catch (error) {
      console.error("Erreur lors de l'inscription de l'utilisateur :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de l'inscription de l'utilisateur." });
    }
  }

exports.login = async (req,res) => {
    const { username, password } = req.body;

    try {
        
        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {

                        if(!passwordCheck) return res.status(400).send({ error: "Don't have Password"});

                        // create jwt token
                        const token = jwt.sign({
                                        userId: user._id,
                                        username : user.username
                                    }, ENV.JWT_SECRET , { expiresIn : "24h"});

                        return res.status(200).send({
                            msg: "Login Successful...!",
                            username: user.username,
                            token
                        });                                    

                    })
                    .catch(error =>{
                        return res.status(400).send({ error: "Password does not Match"})
                    })
            })
            .catch( error => {
                return res.status(404).send({ error : "Username not Found"});
            })

    } catch (error) {
        return res.status(500).send({ error});
    }
}

exports.getUser = async (req, res) => {
    const { username } = req.params;
    
    try {
       if (!username) {
          return res.status(501).send({ error: "Invalid Username" });
       }
       
       const user = await UserModel.findOne({ username }).exec();
       
       if (!user) {
          return res.status(501).send({ error: "Couldn't Find the User" });
       }
       
       const { password, ...rest } = Object.assign({}, user.toJSON());
       return res.status(201).send(rest);
    } catch (error) {
       return res.status(404).send({ error: "Cannot Find User Data" });
    }
}
 
exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.user; 

        if (userId) {
            const body = req.body;
            
            // update the data
            UserModel.updateOne({ _id: userId }, body)
                .then(() => {
                    return res.status(201).send({ msg: "Record Updated...!" });
                })
                .catch((err) => {
                    throw err;
                });
        } else {
            return res.status(401).send({ error: "User Not Found...!" });
        }
    } catch (error) {
        return res.status(401).send({ error });
    }
}


exports.generateOTP = async (req,res) => {
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
    res.status(201).send({ code: req.app.locals.OTP })
}

exports.verifyOTP = async (req,res) => {
    const { code } = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"});
}

exports.authenticate = async (req,res) => {
    res.end()
}

exports.createResetSession = async (req,res) => {
    if(req.app.locals.resetSession){
        return res.status(201).send({ flag: req.app.locals.resetSession })
   }
   return res.status(440).send({error : "Session expired!"})
}

exports.resetPassword = async (req, res) => {
    try {
        if (!req.app.locals.resetSession) {
            return res.status(440).send({ error: "Session expired!" });
        }

        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).send({ error: "Username not found" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.updateOne({ username: user.username }, { password: hashedPassword });

        req.app.locals.resetSession = false; // Réinitialisation de la session

        return res.status(201).send({ msg: "Record Updated...!" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

