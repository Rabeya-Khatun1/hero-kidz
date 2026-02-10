"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {

const session = useSession();


    return (
        <div>
            {session.status === "authenticated" ? <><button onClick={()=>signOut()} className='btn btn-primary'>Log out</button>
            </> : <> <Link href="/login">
            <button className='btn btn-outline btn-primary '>Log In</button></Link>
            </>} 
        </div>
    );
};

export default AuthButtons;