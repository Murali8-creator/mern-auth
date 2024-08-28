import React from 'react'
import classes from './signup.module.css';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../store/user/userSlice';

const Signin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  async function handleSubmit(event){
    event.preventDefault();
    

    const formData = new FormData(event.target);  
    const password = formData.get('password');
    const email = formData.get('email');

    const data = new Object();
    data.password = password;
    data.email = email;
   

    const res = await fetch("/api/auth/signin",{
      method : 'POST',
      
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    }
    )

    if(res.ok){
      dispatch(signInSuccess());
      navigate('/');
    }
  }
  return (
    <>
    <form  method="post" onSubmit={handleSubmit}>
    <div className='flex justify-center mt-10'>
    <div className='flex flex-col justify-center items-center h-4/5 w-4/5'>
     
      <h1 className='font-bold text-3xl mt-3'>Sign In</h1>
      <div className='mt-5 flex flex-col gap-3 h-4/5 w-1/2 p-7'>
        <input type="text" name='email' placeholder='email'  className={classes.input}/>
        <input type="text" name='password' placeholder='password'  className={classes.input}/>
        <button className={classes.button}>SIGN In</button>
        <div className='flex gap-2 mt-5'>
          <p>Don't Have an account?</p>
          <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </form>
    </>
  )
}

export default Signin