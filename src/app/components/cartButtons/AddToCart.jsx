"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const AddToCart = ({product}) => {

const isLogin = false;
const router = useRouter();
const pathname = usePathname();
const handleAddToCart = ()=>{
  if(isLogin) alert( product._id);
  else{
  router.push(`/login?callbackUrl=${pathname}`);
  }

}

    return (
         <button onClick={handleAddToCart} className="btn btn-primary flex gap-2 w-full mt-4">
        <FaCartPlus className="inline mr-2" />
          Add to Cart
        </button>
    );
};

export default AddToCart;