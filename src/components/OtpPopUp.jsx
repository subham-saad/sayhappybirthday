import React, { useState } from 'react';

const OtpPopUp = ({ isOpen, onClose, onSubmit }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '1234') {
      onSubmit();
    } else {
      console.log('Invalid OTP');
    }
  };

  return (
    <div className={isOpen ? "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center" : "hidden"}>
      <div className="bg-white p-6 w-60 rounded-md shadow-md max-w-md">
        <h2 className="text-xl font-bold ml-10 px-1 text-[#482683] mb-4">Enter OTP</h2>
        <div className="flex mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              placeholder=""
              maxLength="1"
              className="w-10 p-3 border border-gray-500 bg-[#482683] text-white font-semibold text-xs rounded-md mr-2"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 text-white ml-12 font-semibold text-xs px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpPopUp;
