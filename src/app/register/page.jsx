import Link from 'next/link';
import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';

const Register = () => {
    return (
        <div className='bg-orange-50'>
         
          <div className="hero bg-base-200 min-h-screen">
  <div className=" ">
    
    <div className="w-96 bg-base-100 shrink-0 shadow-2xl">
        
      <div className="card-body">
        <h2 className='text-black  font-bold text-2xl text-center'>Create a account</h2>
    <RegisterForm></RegisterForm>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;