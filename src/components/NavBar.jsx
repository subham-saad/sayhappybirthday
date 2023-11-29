// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cadburry from '../assets/Cadbury Logo.png';
import Hamburger from '../assets/Hamburger.png';
import SiderbarMenu from './SiderbarMenu';

const NavBar = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {


  return (
    <nav className={`bg-[#482683] px-3 flex justify-between fixed w-full z-10`}>
   
      <Link to="/" className="flex items-center space-x-2">
        <img src={cadburry} alt='cadburrylogo' className='h-7 object-contain' />
        <img src={logo} alt='logo' className='h-20 object-contain' />
      </Link>

      <button className="text-white" onClick={toggleMenu}>
        <img src={Hamburger} alt="menuicon" className='h-5 object-contain' />
      </button>

      <div className=' p-6  absolute mt-[-20px] left-28 min-[360px]:min-w-[290px] min-[380px]:min-w-[300px] min-[412px]:min-w-[320px] min-[430px]:min-w-[330px] z-10 '>
      {isMenuOpen && <SiderbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    
      </div>
    </nav>
  );
};

export default NavBar;
