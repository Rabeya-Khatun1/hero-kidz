import React from 'react';
import Logo from './components/layouts/Logo';

const Loading = () => {
    return (
              <div className='flex flex-col gap-5 min-h-screen justify-center items-center'>
            <div className='animate-ping'>
                <Logo size={100} className='text-primary'/>
            </div>
       <h1 className='text-5xl font-bold animate-pulse'>Loading..</h1>
     
        </div>
    );
};

export default Loading;