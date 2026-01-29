import Image from 'next/image';
import React from 'react';
import { fontBangla } from '../layout';


const Banner = () => {
    return (
        <div className='flex gap-5 text-left'>
      <div className='flex-1 space-y-5'>
              <h1 className={`text-4xl font-bold leading-20 ${fontBangla.className}`}>আপনার শিশুদের দিন একটি <br /> <span className='text-primary font-semibold'>সুন্দর ভবিষ্যৎ</span></h1>
        
        <p>Buy Every toy with up to 15% Discount</p>
        <button className='btn btn-primary btn-outline'>Explore Products</button>
      </div>
        
        <div className='flex-1'>
            <Image
  src="/assets/hero.png"
  alt="Buy Every toy with up to 15% Discount"
  width={500}
  height={400}
/>

        </div>


        </div>
    );
};

export default Banner;