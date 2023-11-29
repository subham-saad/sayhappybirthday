import React from 'react';
import Rap from '../assets/Rap.png';
import Rock from '../assets/Rock.png';
import Pop from '../assets/Pop.png';
import EDM from '../assets/EDM.png';
import Desi from '../assets/Desi.png';

function MoodBox() {
  const genres = [
    { image: Rap, label: 'Rap' },
    { image: Rock, label: 'Rock' },
    { image: Pop, label: 'Pop' },
    { image: Desi, label: 'Desi' },
    { image: EDM, label: 'EDM' },
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
        <h4 className='text-sm text-[#482683] font-bold mx-[118px]'>Genres</h4>
      </div>
      <div className='flex h-12 space-x-4 p-2 ' style={imageContainerStyle}>
        {genres.map((genre, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={genre.image} alt={genre.label} className='h-10 w-10 mb-2' />
            <p className="text-white text-xs  font-bold">{genre.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodBox;
