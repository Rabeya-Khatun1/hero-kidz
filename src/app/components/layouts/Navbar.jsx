import React from 'react';
import Logo from './Logo'
import Link from 'next/link';
import NavLink from '../buttons/NavLink';
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Navbar = () => {

const nav = <>

<li><NavLink href="/">Home</NavLink></li>
<li><NavLink href="/product">Products</NavLink></li>
<li><NavLink href="/about">About</NavLink></li>
<li><NavLink href="/services">Services</NavLink></li>
<li><NavLink href="/contact">Contact</NavLink></li>

</>


    return (
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{nav}
      </ul>
    </div>
  <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 {nav}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <Link href={'cart'}><PiShoppingCartSimpleLight className='btn btn-primary' size={20}/></Link>
 <Link href="/login">   <button className='btn btn-primary'>Login</button></Link>
  </div>
</div>
    );
};

export default Navbar;