import React from 'react';
import schoollogo from "../assets/schoollogo.png";
import bar from "../assets/bar.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar m-0 bg-[#F2EAD3] rounded-lg">
      <img className="w-12 h-12 md:w-10 lg:w-12 absolute top-5% left-3" src={schoollogo} alt="" />
      <div className="top-16">
        <p className=" text-emerald-700 font-poppins sm:text-xs font-bold">
          <span className=" right-[20px] md:relative md:left-[60px] top--1 md:text-xl xs:text-xs xs:relative xs:left-7">The Ideal College</span>
        </p>
        <div>
            <input type="text" className= "bg-blue-200 rounded-full absolute px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent xs:right-[25%] xs:top-[2%] xs:w-40 md:right-[50%] md:w-60 " placeholder="Search" />
        </div>
        </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-12 text-black-100  ">
      <li className="font-poppins text-xl font-white relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-green-400 before:via-purple-500 before:to-gray-400 hover:before:w-full hover:before:opacity-100">
  <a href="/">Home</a>
</li>

<li className="font-poppins text-xl font-white relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-red-400 before:via-green-500 before:to-cyan-400 hover:before:w-full hover:before:opacity-100 " > 
<a className="nav-link" href="/colleges">
                Colleges
              </a>
</li>
        <li className="font-poppins text-xl font-white relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-yellow-400 before:via-yellow-500 before:to-blue-400 hover:before:w-full hover:before:opacity-100" > 
          <a href="/aboutus">About Us</a>
        </li>
        <li className="font-poppins text-xl font-white relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-green-400 before:via-green-500 before:to-gray-400 hover:before:w-full hover:before:opacity-100 " > 
          <a href="/contactus">Contact Us</a>
        </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center icon="fa-solid fa-bars'>
          <img className='w-[28px] h-[28px] objext-contain' onClick={() => setToggle((prev) => !prev)} src={toggle ? close : bar} alt="" />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1 space-x-14  ">
        <li className="font-poppins font-green text-slate-100 mb-4 relative left-6" > 
          <a href="/">Home</a>
        </li>
        <li className="font-poppins font-white text-slate-100 mb-4" > 
          <a href="/colleges">College</a>
        </li>
        <li className="font-poppins font-white text-slate-100 mb-4 " > 
          <a href="/aboutus">About Us</a>
        </li>
        <li className="font-poppins font-white text-slate-100 mb-4 " > 
          <a href="/contactus">Contact Us</a>
        </li>
        </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
