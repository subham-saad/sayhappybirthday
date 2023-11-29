import React from 'react';
import Male from '../assets/MAle.png'
import Female from '../assets/Female.png'

function SingersVoice() {
  const moods = [
    { image: Male, label: 'Male' },
    { image: Female, label: 'Female' },
 
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
        <h4 className='text-sm text-[#482683] font-bold mx-24'>Singer's voice</h4>
      </div>
      <div className='flex  h-12 space-x-16 p-2' style={imageContainerStyle}>
        {moods.map((mood, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={mood.image} alt={mood.label} className='h-10 w-16 mb-2' />
            <p className="text-white text-xs font-bold">{mood.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingersVoice;
