import { useState } from 'react';
import Male from '../assets/MAle.png';
import Female from '../assets/Female.png';

function SingersVoice() {
  const singers = [
    { image: Male, label: 'Male' },
    { image: Female, label: 'Female' },
  ];

  const [selectedSinger, setSelectedSinger] = useState(null);

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  const handleSingerClick = (index) => {
    setSelectedSinger(index);
  };

  return (
    <div className="w-[290px] mb-4 h-[100px] rounded-xl border border-yellow-500">
      <div className='w-[289px] h-[20px] rounded-t-[12px] bg-yellow-500'>
        <h4 className='text-sm text-[#482683] font-bold mx-24'>Singer's voice</h4>
      </div>
      <div className='flex h-12 space-x-16 p-2' style={imageContainerStyle}>
        {singers.map((singer, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer ${
              selectedSinger === index ? 'border bg-yellow-500 rounded-md' : ''
            }`}
            onClick={() => handleSingerClick(index)}
          >
            <img src={singer.image} alt={singer.label} className='h-10 w-16 mb-2' />
            <p className="text-white text-xs font-bold">{singer.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingersVoice;
