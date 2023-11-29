import React from 'react';

const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black min-[360px]:w-[40%] min-[380px]:w-[40%] min-[430px]:w-[33%] min-[412px]:w-[36%] bg-opacity-40 backdrop-filter backdrop-blur-sm z-50"
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
