import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/image.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import { registerUser } from '../helper/helper'
import Compressor from 'compressorjs';


import styles from '../styles/Username.module.css';

export default function Register() {

  const navigate = useNavigate()
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      email: 'doyol56239@cnogs.com',
      username: 'example123',
      password : 'admin@123'
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      try {
      values = await Object.assign(values, { profile : file || ''})
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success : <b>Register Successfully...!</b>,
        error : <b>Could not Register.</b>
      });

      registerPromise.then(function(){ navigate('/')});
    } catch (error) {
      console.error(error);
      // Traitez l'erreur ici, affichez un message d'erreur ou effectuez une autre action appropriée
    }
    }
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const file = e.target.files[0];

    // Limiter la taille du fichier si nécessaire
    const maxSizeInBytes = 1024 * 1024; // 1MB
    if (file.size > maxSizeInBytes) {
      console.log('La taille du fichier dépasse la limite.');
      return;
    }

    // Compresser l'image avant de l'encoder en base64
    new Compressor(file, {
      quality: 0.6, // Ajuster la qualité de la compression
      maxWidth: 800, // Ajuster la largeur maximale de l'image
      maxHeight: 800, // Ajuster la hauteur maximale de l'image
      success: async (compressedFile) => {
        const base64 = await convertToBase64(compressedFile);
        setFile(base64);
        console.log(base64);
      },
      error: (error) => {
        console.log('Erreur lors de la compression de l\'image:', error);
      },
    });
  };

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                Happy to join you!
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <label htmlFor="profile">
                    <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                  </label>
                  
                  <input onChange={onUpload} type="file" id='profile' name='profile' />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*' />
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password*' />
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login Now</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}
