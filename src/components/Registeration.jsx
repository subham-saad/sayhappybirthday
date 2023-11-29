import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../assets/BG.jpg';
import CeleBG from '../assets/CelebrationsBg1.png';
import asset from '../assets/Asset.png'
import Yellowtone from '../assets/Yellowtone.png'
import progressbar from '../assets/progressbar.png'
import OtpPopUp from './OtpPopUp';
function Registration() {
  const navigate = useNavigate();
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOtpPopupOpen(true);
    
  };

  const handleOtpSubmit = () => {
   
    setIsOtpPopupOpen(false);
    navigate('/birthday-can');
  };

  const handleOtpPopupClose = () => {
   
    setIsOtpPopupOpen(false);
  };
  

  const containerStyle = {
    display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     minHeight: '100vh',
    background: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
     padding: '12px',
  };

  const imageStyle = {
    Width: '30%',
    Height:'30%',
    padding:'30px',
    marginTop:'-55px'
  };

  return (
    <div style={containerStyle}>
      <img src={progressbar} alt='progressbar' className='mt-20' width={200} height={200} />
      <img src={CeleBG} alt='cadburrybackground' style={imageStyle} className='' />
        <form className="w-full max-w-md min-[360px]:p-[18px] min-[380px]:p-[26px] min-[412px]:p-[35px] min-[430]:p-[40px] absolute min-[360px]:top-[285px] min-[390px]:top-[300px] min-[412px]:top-[320px] mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-white text-lg font-bold mb-2 text-center">Register to Create</h2>
  <input
    type="number"
    id="phone"
    name="phone"
    placeholder="Phone Number"
    required
    className="w-full h-10 mb-2 p-4 border border-gray-300 rounded-3xl"
  />
  <input
    type="text"
    id="fullName"
    name="fullName"
    placeholder="Full Name"
    required
    className="w-full h-10 mb-2 p-4 border border-gray-300 rounded-3xl"
  />
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Email ID"
    required
    className="w-full h-10 mb-2 p-4 border border-gray-300 rounded-3xl"
  />

  <div className=" items-center mb-2 p-2">
    <span className='flex py-1'>
    <input type="checkbox" id="terms" name="terms" className="mr-2" />
    <label htmlFor="terms" className="text-white text-xs font-semibold">I agree Terms & Conditions and  <br/> Privacy Policy of Mondelz(cadburry)</label><br/>
    </span>
    <span className='flex py-1'>
    <input type="checkbox" id="terms" name="subscribe" className="mr-2" />
    <label htmlFor="subscribe" className="text-white text-xs font-semibold">I would like recive promotional <br/> from mondelz (cadburry) its products and offer</label>
    <img src={Yellowtone} alt='Yellowtone' height={20} width={20} className='ml-4' />
    </span>
  </div>

  
  <div className='flex'>
    <img src={asset} alt='asset' height={40} width={40} />
  <button type="submit"  className="bg-yellow-500 items-center text-md font-bold text-[#482683] p-2 ml-[20%] rounded-2xl h-12 w-32">
    Submit
  </button>
 
  </div>
</form>
{/* {isOtpPopupOpen && <OtpPopUp  />} */}
<OtpPopUp isOpen={isOtpPopupOpen} onClose={handleOtpPopupClose} onSubmit={handleOtpSubmit} />
</div>
   
  );
}

export default Registration;
