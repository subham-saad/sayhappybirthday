import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../assets/BG.jpg';
import CeleBG from '../assets/Headphone.png';
import tone from '../assets/Purple Music Tone.png'
import progressbar2 from '../assets/progress bar2.png'
import baloon from '../assets/Balloon2.png'
import MoodBox from './MoodBox';
import GenereBox from './GenereBox';
import SingersVoice from './SingersVoice'
import asset from '../assets/Asset.png'

function Vibe() {

   const navigate = useNavigate();
   
   const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    minHeight: '100vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px', // Add padding for better visibility
  };

  const imageStyle = {
    width: '60%',
    height:'60%',
    padding:'10px',
    marginTop:'0px'
    //marginBottom: '20px', // Add margin to separate the image from the form
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form');
    navigate('/more');
   
  };
 return (
    <div style={containerStyle}>
     
      <img src={progressbar2} alt='progressbar' className='mt-16 ' width= {200} height={200} />
      
      <h2 className="text-white text-md font-bold mt-6  text-center">Tell us about your loved one...</h2>
      <div className='flex p-0 mx-1 space-x-4'>
      <img src={tone} alt='asset' className='mt-28 p-1 mr-2 ' style={{width:'50px', height:'50px'}} />
      <img src={CeleBG} alt='cadburrybackground' style={imageStyle} />
      <img src={baloon} alt='baloon' className='mt-8 p-1' style={{width:'60px', height:'60px'}} />
     
    </div>
  <div className='py-[-35px]'>
   <MoodBox  />
   <GenereBox />
  <SingersVoice />
  <div className='flex space-x-16'>
  <button type="submit" onClick={handleSubmit}  className="bg-yellow-500 items-center text-md font-bold  text-[#482683] p-2 ml-[33%] mb-2 rounded-2xl h-12 w-32">
    Proceed
  </button>
  <img src={asset} alt='asset' height={20} width={20} />
  </div>
</div>
</div>
   
  );
}

export default Vibe;
