import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../assets/BG.jpg';
import CeleBG from '../assets/Cap&Gift.png';
import asset from '../assets/Asset.png'
import Yellowtone from '../assets/Yellowtone.png'
import progressbar1 from '../assets/progress bar1.png'
import baloon from '../assets/Balloon.png'
import Purpletone from '../assets/Purpletone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
function BirthdayCan() {
 
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const navigate = useNavigate();


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '15px', // Add padding for better visibility
  };

  const imageStyle = {
    width: '65%',
    height:'65%',
    padding:'0px',
    marginTop:'0px'
    //marginBottom: '20px', // Add margin to separate the image from the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form');
    navigate('/vibe');
   
  };

const incrementAge = () => {
  setAge(age + 1);
};

const decrementAge = () => {
  if (age > 0) {
    setAge(age - 1);
  }
};

  return (
    <div style={containerStyle}>
      <img src={progressbar1} alt='progressbar' className='mt-20' width= {200} height={200} />
      <h2 className="text-white text-lg font-bold mt-4 text-center">Tell us about your loved one...</h2>
      <div className='flex p-3 mx-2'>
      <img src={asset} alt='asset' className='mt-20 p-2' style={{width:'50px', height:'50px'}} />
      <img src={CeleBG} alt='cadburrybackground' style={imageStyle} />
      <img src={baloon} alt='baloon' className='mt-20 p-2' style={{width:'50px', height:'50px'}} />
      </div>
        <form className="w-full max-w-md p-4 mt-[-40px]  mx-auto" onSubmit={handleSubmit} >
<label><h4 className='text-sm py-2 font-semibold text-white ml-28'>Their name</h4></label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="XXXXX XXXXXXXX"
    required
    className="w-full h-10 mb-0 p-4 border border-gray-300 rounded-3xl"
  /><br/>
  <label>
  <h4 className='text-sm py-2 font-semibold text-white ml-16'>How old they'll be this birthday</h4>
</label>
<div className="flex items-center relative">
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Years"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value, 10))}
        required
        className="w-full h-10 mb-0 p-4 text-sm font-bold border border-gray-300 rounded-3xl pr-10"
      />
       <span className="absolute right-[238px] text-sm font-bold top-1/2 transform -translate-y-1/2">Years</span>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-4">
        <FontAwesomeIcon icon={faCaretUp} onClick={incrementAge} />
        <FontAwesomeIcon icon={faCaretDown} onClick={decrementAge} />
      </div>
    </div>

 <label>
  <h4 className='text-sm py-2 font-semibold text-white ml-[125px]'>Gender</h4>
</label>
<div className="flex items-center relative">
<select
  id="gender"
  name="gender"
  value={gender}
  onChange={(e) => setGender(e.target.value)}
  required
  className="dropdown w-full h-[42px]  pl-4 border  text-sm font-bold text-black border-gray-300 rounded-3xl"
>
  <option className='text-sm font-bold' value="">Select Gender</option>
  <option className='text-sm font-bold' value="male">Male</option>
  <option className='text-sm font-bold' value="female">Female</option>
  <option className='text-sm font-bold' value="other">Other</option>

</select>
<div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-4">
<FontAwesomeIcon icon={faCaretDown} /> 
</div>
</div>
<div className='flex p-2 mt-4'>
  <img src={Purpletone} alt='Purpletone' height={32} width={32} />
  <button type="submit"  className="bg-yellow-500 items-center text-md font-bold text-[#482683] p-2 ml-[20%] rounded-2xl h-12 w-32">
    Proceed
  </button>
 
  </div>
</form>

</div>
   
  );
}

export default BirthdayCan;
