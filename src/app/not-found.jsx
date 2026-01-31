import Link from 'next/link';
import React from 'react';
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const Error404 = () => {
    return (
        <div className='flex flex-col gap-5 min-h-screen justify-center items-center'>
            <MdOutlineReportGmailerrorred size={100} className='text-primary'/>
       <h1 className='text-4xl font-bold'>Page Not Found</h1>
      <Link href={"/"}> <button className='btn btn-primary'>Go to Home</button></Link>
        </div>
    );
};

export default Error404;