const express = require('express');
const router = express.Router();

// Importez les contrôleurs ou les middlewares nécessaires
// const { registerMail } = require('../controllers/mailer.js');
const { localVariables, Auth } = require('../middleware/auth.js');
const { register, login , verifyUser, getUser, resetPassword, updateUser, generateOTP, verifyOTP, createResetSession, authenticate } = require('../controllers/userController.js');
const { registerMail } = require('../controllers/mailer.js');

/** POST Methods */
router.post('/register', register) // register user
router.post('/registerMail', registerMail); // send the email
router.post('/authenticate' , verifyUser ,authenticate) // authenticate user
router.post('/login', verifyUser, login)// login in app

/** GET Methods */
router.get('/user/:username' , getUser) // user with username
router.get('/generateOTP' ,verifyUser ,localVariables ,generateOTP); // generate random OTP
router.get('/verifyOTP', verifyUser,verifyOTP ) ; // verify generated OTP
router.get('/createResetSession' , createResetSession ); // reset all the variables

/** PUT Methods */
router.put('/updateuser',Auth ,updateUser); // is use to update the user profile
router.put('/resetPassword', verifyUser , resetPassword) // use to reset password

module.exports = router;
