import React from 'react';
import wings from '../assets/wings.png';

const Head1 = () => {
  return (
    <div className='w-full sm:h-[500px] bg-[#BBC6C8] xs:h-[300px]'>
      <img className='absolute  sm:left-[300px] lg:right-[400px] sm:w-[600px] xs:right-[90px] xs:h-[200px] sm:h-[400px] ' src={wings} alt="" />
      <p className='text-5xl font-lora absolute bottom-[130px] left-1/2 transform -translate-x-1/2 text-center md:text-7xl xs:top-[275px] xs:text-sm sm:top-[450px]  lg:text-4xl'>
        Give your career new wings.
      </p>
    </div>
  );
};

export default Head1;
