"use client"
import Link from 'next/link';
import React from 'react';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';

const error = () => {
    return (
               <div className='flex flex-col gap-5 min-h-screen justify-center items-center'>
            <MdOutlineReportGmailerrorred size={100} className='text-primary'/>
       <h1 className='text-4xl font-bold'>Something wend wrong</h1>
      <Link href={"/"}> <button className='btn btn-primary'>Go to Home</button></Link>
        </div>
    );
};

export default error;