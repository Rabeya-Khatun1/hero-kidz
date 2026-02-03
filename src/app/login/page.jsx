
"use client"
import React from 'react';
import LoginFrom from '../components/forms/LoginFrom';

const Login = () => {

    return (
        <div className='bg-orange-50'>
         
          <div className="hero bg-base-200 min-h-screen">
  <div className=" ">
    
    <div className="w-96 bg-base-100 shrink-0 shadow-2xl">
        
      <div className="card-body">
        <h2 className='text-black  font-bold text-2xl text-center'>Login</h2>
    <LoginFrom></LoginFrom>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;