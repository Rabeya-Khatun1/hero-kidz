import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image from '../../../../public/assets/logo.png'

const Logo = () => {
    return (
<Link href="/" className='flex justify-center items-center gap-2'>
<Image src={image}alt="logo-hero-kidz" width={80} height={70} />
<h2 className='text-xl font-bold '>Hero <span className='font-bold text-primary'>Kidz</span></h2>
</Link>
    );
};

export default Logo;