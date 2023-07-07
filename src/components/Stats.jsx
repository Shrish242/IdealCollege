import React, { useState } from 'react';
import down from '../assets/down.png';

const Stats = () => {
  const [isShow, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!isShow);
  };

  return (
    <div className='w-full sm:w-[400px] sm:left-[450px] sm:top-[650px] xs:w-[200px] xs:left-[140px] xs:top-[1040px] relative'>
      <div className='p-[10px] bg-slate-300 shadow-lg cursor-pointer shadow-cyan-500/50 flex items-center justify-between' onClick={toggleShow}>
        Choose Faculty <img className='w-[30px] h-[30px]' src={down} alt="" />
      </div>
      <div className={`bg-slate-100 shadow-lg shadow-black ${isShow ? 'absolute left-0 mt-2 w-full' : 'hidden'}`}>
        <a href="/Science"><div className='p-[10px] cursor-pointer hover:bg-slate-200'>Science</div></a>
        <a href="/Management"><div className='p-[10px] cursor-pointer hover:bg-slate-200'>Management</div></a>
        <a href="/Law"><div className='p-[10px] cursor-pointer hover:bg-slate-200'>Law</div></a>
      </div>
    </div>
  );
};

export default Stats;
