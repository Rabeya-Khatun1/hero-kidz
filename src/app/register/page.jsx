import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className='bg-orange-50'>
         
          <div className="hero bg-base-200 min-h-screen">
  <div className=" ">
    
    <div className="w-96 bg-base-100 shrink-0 shadow-2xl">
        
      <div className="card-body">
        <h2 className='text-black  font-bold text-2xl text-center'>Create a account</h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary text-white mt-4">Login</button>
        {/* Google */}
<button className="btn text-primary mt-2 border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className='text-center'>Don't have an account? <Link href="/login" className='text-primary underline'>Login</Link></p>
        
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;