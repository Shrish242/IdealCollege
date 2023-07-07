import React from 'react';
import { FaFacebook , FaTwitter , FaTiktok , FaInstagram ,FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-[150px] bg-[#B5C99A] absolute sm:top-[1450px] xs:top-[1600px]'>
       <p className='absolute sm:left-[900px] sm:top-[10px] xs:left-[320px] font-lora text-4xl font-bold'>Socials</p>
       <div className='flex space-x-4 absolute sm:left-[900px] xs:left-[300px] xs:top-[50px]'>
      <a href=""><FaFacebook /></a>
      <a href=""><FaTwitter/></a>
      <a href=""><FaTiktok/></a>
      <a href=""><FaInstagram/></a>
       <a href=""><FaGithub/></a></div>

    <div><p className='text-3xl font-poppins text-stone-600 font-semibold mx-2 my-2'>Ideal College</p>
    <p className='text-sm font-poppins space-betweeen mx-2'>Career counselling</p> <p className='text-sm font-poppins space-betweeen mx-2'>Guidance</p> <p className='text-sm font-poppins space-betweeen mx-2'>College Info</p> <p className='text-sm font-poppins space-betweeen mx-2'>Advertisement</p></div>   
    <div className=' absolute left-[390px]'> <p className='xs:text-xs xs:left-[-170px] xs:absolute sm:text-sm font-poppins space-betweeen mx-2 xs:whitespace-nowrap'> @Shrish,All rights reserved </p> </div>
    <p className='sm:text-2xl font-poppins text-stone-800 font-semibold absolute sm:left-[350px] sm:bottom-[90px] xs:text-xs xs:left-[140px] xs:bottom-[50px] xs:whitespace-nowrap '>Find your college here with us.</p></div>
    
  );
};

export default Footer;
