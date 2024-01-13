import React, { useState } from 'react'
import { useUserLoginMutation } from '../../store/services/HomeService'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { loginValidation } from '../../utils/validation/Formvalidation';
import { useNavigate } from 'react-router-dom';
import Toaster from '../../components/Toaster';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../store/slice/AuthSlice';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(loginValidation) });
  const [login] = useUserLoginMutation();
  const navigaet = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dispatch = useDispatch()


  const onSubmit = async (dataa) => {
    const userData = {
      username: dataa.email,
      password: dataa.password
    }
    console.log(userData, 'ddddddd')
    try {
      const { data, error } = await login(userData)
      if (error) {
        console.log(error)
        setSnackbarOpen(true);
        setSnackbarMessage(error.data);
      } else {
        setSnackbarOpen(true);
        setSnackbarMessage('Success');
        console.log(data)
        dispatch(setToken(data.token))
        // dispatch(setUser(data.token))

      }
    } catch (error) {
      console.log(error)
    }
  }

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };


  return (
    <div className='flex flex-col gap-y-4 w-[400px] m-auto'>
      <div className='flex flex-col gap-y-4'>
        <div className='text-center flex justify-center'>
          {/* <img className='w-28' src='' alt="logo" /> */}
          <p>Shop</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className=' p-8 borde flex border rounded-lg flex-col gap-y-3'>
            <p className='text-2xl font-medium'>Sign in</p>
            <div className='flex flex-col gap-y-4'>
              <div>
                <p className='text-md font-medium' >Email or mobile phone number</p>
                <input className='border outline-none box-shadow-inset rounded-md p-2 w-full' type="text" id='email' placeholder='John@gmail.com' defaultValue='' {...register('email')} />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <p className='text-md font-medium' >Password</p>
                <input className='border outline-none box-shadow-inset rounded-md p-2 w-full' type="text" id='password' placeholder='m38rmF$' defaultValue='' {...register('password')} />
                <p>{errors.password?.message}</p>
              </div>
              <input className='w-full p-2 text-sm bg-[#FFD814] rounded-lg' type="submit" value="continue" />
              <p className='text-xs'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.   </p>
            </div>
          </div>
        </form>
      </div>
      <div className='flex flex-col gap-y-3'>
        <div className='flex items-center gap-x-2'>
          <div className='w-4/12 h-[1px] bg-black'></div>
          <div className='w-3/12'> New Account</div>
          <div className='w-4/12  h-[1px] bg-black'></div>
        </div>
        <div>
          <input className='rounded-lg outline-none box-shadow-input_outset w-full p-2 text-center border' type='submit value' value="Create your Amazon account" />
        </div>
      </div>
      <Toaster open={snackbarOpen} onClose={closeSnackbar} message={snackbarMessage} />
    </div>
  )
}

export default Login