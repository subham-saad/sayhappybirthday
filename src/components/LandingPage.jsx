import React from 'react';
import BG from '../assets/BG.jpg';
import CeleBG from '../assets/CelebrationsBg.png';

const LandingPage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div style={containerStyle}>
      <div>
        <img src={CeleBG} alt='celebration' style={imageStyle} />
      </div>
       <p className='text-white text-md font-serif'>A unique birthday song for everyone</p>
       <br/>
       <p className='text-white text-sm font-serif italic px-2'>इस birthday पर कुछ मीठा हो जाए, कुछ अच्छा हो जाए!</p>
    </div>
  );
};

export default LandingPage;
