import React from 'react';
import Menu2 from '../assets/Menu1.png';
import Cross from '../assets/Cross.png';
import MDLZ from '../assets/MDLZ.png';


function SiderbarMenu({ isMenuOpen, setIsMenuOpen }) {
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const containerStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      minHeight: '100vh',
      minWidth: '50vw',
      background: `url(${Menu2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      padding: '15px',
    };
  
    const listStyle = {
      marginTop: '50%', // Adjust based on your design needs
      listStyle: 'none',
      padding: 0,
    };
  
   
  
    return (
      <div style={containerStyle}>

         <div className='mx-3'>
          <img
            src={Cross}
            onClick={toggleMenu}
            alt='close'
            className='h-7 ml-24 object-contain px-2'
          />
  
          <ul style={listStyle}>
            <li className='text-white font-semibold text-sm hidden mt-36'>
              How to Participate
            </li>
            <br />
            <br />
            <li className='text-white font-semibold hidden text-sm mt-'>
              Terms & Conditions
            </li>
            <br />
            <br />
            <li className='text-white font-semibold hidden text-sm'>
              Privacy Policy
            </li>
            <br />
            <br />
            <li className='text-white font-semibold hidden text-sm'>Contact Us</li>
            <br />
            <br />
          </ul>
          <br />
  
          <img
            className='bg-white mt-[50%] hidden' // Adjust based on your design needs
            src={MDLZ}
            alt='MDLZ'
            height={100}
            width={100}
          /><br/>
        </div> 
      </div>
    );
  }
  
  export default SiderbarMenu;
  