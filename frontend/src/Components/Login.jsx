import React, { useState } from 'react'
import { Logos } from '../Assets/assets';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handelLogin=(e)=>{
    e.preventDefault();
    if(email==='yuktadevsquad@gmail.com' && password==='ITYuktaDevSquad@123'){
         sessionStorage.setItem('login',true);
         alert('You have Succesfully Logged in')
         navigate('/admin');
    }
    else{
      alert('Invalid Credentials');
    }
  }
  return (
    <div className='w-full mx-auto'>
      <div className='py-2 px-2 flex flex-col items-center gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[400px] w-[90%] shadow-md rounded-sm shadow-gray-500'>
        <div className='py-2 px-2 flex flex-col items-center w-full'>
          <img src={Logos.Squad} className='sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] rounded-full' alt='/'></img>
          <h1 className='sm:text-xl lg:text-2xl text-purple-600 font-medium'>Admin Login</h1>
        </div>
        <div className='py-2 px-2 w-full'>
          <form className='flex flex-col items-start gap-2' onSubmit={handelLogin}>
            <input className='w-full px-2 py-2 rounded-sm border border-slate-800 outline-purple-400 text-[16px] font-medium' type='email' id='email' name='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input className='w-full px-2 py-2 rounded-sm border border-slate-800 outline-purple-400 text-[16px] font-medium' type='password' id='password' name='password' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <p className='py-2 px-1 text-lg font-medium text-[#4545d7] hover:text-purple-600 hover:text-underline hover:cursor-pointer'>Forgot Password?</p>
            <button type='submit' className='px-4 py-2 bg-purple-600 text-[19px] text-black font-medium rounded-md w-full'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login