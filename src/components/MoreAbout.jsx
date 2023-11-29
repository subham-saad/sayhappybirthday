import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../assets/BG.jpg';
// import CeleBG from '../assets/Cap&Gift.png';
import asset from '../assets/Asset.png'
import Yellowtone from '../assets/Yellowtone.png'
import progressbar1 from '../assets/progress bar3.png'
import baloon from '../assets/Balloon.png'
import Message from '../assets/Message.png'
function MoreAbout() {
 
    const navigate = useNavigate();


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    minHeight: '105vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '10px', // Add padding for better visibility
  };

  const imageStyle = {
    width: '60%',
    height:'60%',
    padding:'0px',
    marginTop:'0px'
    //marginBottom: '20px', // Add margin to separate the image from the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form');
    navigate('/song');
   
  };


  return (
    <div style={containerStyle}>
 
      <img src={progressbar1} alt='progressbar' className='mt-20' width= {200} height={200} />
      <span className='mb-0'>
      <h2 className="text-white text-md font-bold mt-4 text-center">Tell us little more about them...</h2>
      <div className='flex p-3 mx-2'>
      <img src={asset} alt='asset' className='mt-20 p-2' style={{width:'50px', height:'50px'}} />
      <img src={Message} alt='Message' style={imageStyle} />
      <img src={baloon} alt='baloon' className='mt-20 p-2' style={{width:'50px', height:'50px'}} />
      </div>
      </span>
      <form className="w-full max-w-md absolute top-[260px] min-[360px]:p-6 min-[380px]:p-8 min-[412px]:p-[60px] min-[430px]:p-[65px] mx-auto overflow-y-auto" onSubmit={handleSubmit} >
<label><h4 className='text-sm py-2 font-semibold text-white ml-12'>What's your Pet name for them?</h4></label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="XXXXX XXXXXXXX"
    required
    className="w-full h-10 mb-0 p-4 border border-gray-300 rounded-3xl"
  /><br/>
  
<label><h4 className='text-sm py-2 font-semibold text-white ml-16'>What's make them angry?</h4></label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="XXXXX XXXXXXXX"
    required
    className="w-full h-10 mb-0 p-4 border border-gray-300 rounded-3xl"
  /><br/>
  <label>
 
</label>
<label><h4 className='text-sm py-2 font-semibold text-white ml-12'>What's funniest things they do?</h4></label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="XXXXX XXXXXXXX"
    required
    className="w-full h-10 mb-0 p-4 border border-gray-300 rounded-3xl"
  /><br/>
  
  <label><h4 className='text-sm py-2 font-semibold text-white ml-20'>Their favourite sport.</h4></label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="XXXXX XXXXXXXX"
    required
    className="w-full h-10 mb-0 p-4 border border-gray-300 rounded-3xl"
  /><br/>

<div className='flex p-[6px] mt-2'>
<button type="submit" className="bg-violet-300 items-center text-sm font-bold text-[#482683] p-0 ml-[5%] rounded-2xl h-10 w-32">
    Answer More
</button>
  <button type="submit"  className="bg-yellow-500 items-center text-sm font-bold text-[#482683] p-0 ml-[8%] rounded-2xl h-10 w-32">
    Proceed
  </button>
 
  </div>
  
 <p className='text-[8px] ml-8 text-white'>For enhanced personalisation</p>
</form>

</div>
   
  );
}

export default MoreAbout;
