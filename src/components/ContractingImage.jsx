import React, { useState, useEffect } from 'react';
// import './ContractingImage.css'; // Import the stylesheet
import guitar from '../assets/Guitar 12th screen.png';
import desi from '../assets/Desi.png';
import edm from '../assets/EDM.png';
import BG from '../assets/BG.jpg';
import Yellowtone from '../assets/Yellowtone.png'
import Purpletone from '../assets/Purpletone.png'
import asset from '../assets/Asset.png'
import purplemusic from '../assets/Purple Music Tone.png'

const ContractingImage = () => {
  const images = [guitar, desi, edm]; // Replace with your actual image imports
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isContracted, setIsContracted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, images.length]);

  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    minHeight: '100vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '15px', // Add padding for better visibility
  };

  return (
    <div style={containerStyle}>
      <img src={asset} alt='asset' className='w-16 h-16 p-1 mr-48 mt-28' />
      <h4 className='text-md text-white  font-bold'>Please wait</h4>
      <p className='text-sm text-white font-bold'>while we compose your song...</p>
    <div className='flex space-x-16 py-2'>
     <img className='w-8 h-8 mt-8' src={purplemusic} alt='purplemusic' /> 
    <div className={` ${isContracted ? 'contracted' : ''}`}>
    <img
        src={images[currentImageIndex]}
        alt="Contracting Image"
        className="w-full h-36 mt-10 p-2 transition-all duration-500 ease-in-out"
      />
      
    </div>
    <img className='w-12 h-12 p-2 transform rotate-45' src={Yellowtone } alt='Yellowtone ' /> 
    </div> 
    <div className='flex space-x-40'>
       <img src={Purpletone} alt='purpletone' className='h-12 w-12 p-2 mt-8'/> 
       <img src={asset} alt='asset' className='w-16 h-16 p-2 ' />   
       </div>
    </div>
  );
};

export default ContractingImage;
