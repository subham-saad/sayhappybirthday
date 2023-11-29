import React from 'react';
import Funyy from '../assets/Funny.png';
import Calm from '../assets/Calm.png';
import Motivational from '../assets/Motivational.png';
import Romantic from '../assets/Romantic.png';
import Happy from '../assets/Happy.png';

function MoodBox() {
  const moods = [
    { image: Happy, label: 'Happy' },
    { image: Romantic, label: 'Romantic' },
    { image: Funyy, label: 'Funny' },
    { image: Motivational, label: 'Motivational' },
    { image: Calm, label: 'Calm' },
  ];

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div className="w-[290px] mb-4 h-[100px] rounded-xl border border-yellow-500">
      <div className='w-[289px] h-[20px] rounded-t-[12px] bg-yellow-500'>
        <h4 className='text-sm text-[#482683] font-bold mx-[120px]'>Mood</h4>
      </div>
      <div className='flex  h-12 space-x-2 p-2' style={imageContainerStyle}>
        {moods.map((mood, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={mood.image} alt={mood.label} className='h-10 w-10 mb-2' />
            <p className="text-white text-xs font-bold">{mood.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodBox;
