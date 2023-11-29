import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../assets/BG.jpg';
import progressbar1 from '../assets/progress bar4.png'

function CreateSong() {

    const navigate = useNavigate();
 
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '105vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '10px', // Add padding for better visibility
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form');
    navigate('/contracting');
   
  };

  return (
    <div style={containerStyle}>
      <img src={progressbar1} alt='progressbar' className='mt-20' width= {200} height={200} />
      <h2 className="text-white text-md font-bold mt-6 text-center">Your song's lyrics are ready!</h2>
     
    <div className='bg-white w-[250px] h-[350px] mt-6 rounded-lg overflow-y-auto'>
     <p className='items-center text-sm font-bold text-[#482683] mx-3 my-2 '>
     In the vibrant world of technology, innovation continues to shape our daily lives. From artificial intelligence simplifying complex tasks to advancements in renewable energy reshaping our approach to sustainability, the technological landscape is dynamic and ever-evolving. The fusion of data and connectivity has ushered in an era where information flows seamlessly, connecting people across the globe. As we navigate the digital realm, the ethical dimensions of technology gain prominence, urging us to ponder questions of privacy, security, and societal impact.
     In parallel, cultural and societal shifts are influencing the way we work and interact. Remote work, accelerated by global events, has transformed traditional office dynamics, emphasizing flexibility and redefining work-life balance. Social media, a powerful force in modern communication, fosters both global conversations and niche communities, influencing trends and shaping public discourse. The intersection of technology and culture has given rise to new forms of expression, entertainment, and social connection.
     </p>
    </div>
    <div className='flex p-[8px] mt-6'>
      <button type="submit"  className="bg-violet-300 items-center text-sm font-bold text-[#482683] p-0 ml-[2%] rounded-2xl h-10 w-32">
         Recreate lyrics
      </button>
      <button type="submit" onClick={handleSubmit} className="bg-yellow-500 items-center text-sm font-bold text-[#482683] p-0 ml-[5%] rounded-2xl h-10 w-32">
       Create song
       </button>
    </div>
</div>
   
  );
}

export default CreateSong;
