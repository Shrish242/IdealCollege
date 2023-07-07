import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      end={{ opacity: 0, transition: { duration: 4 } }}
      className='bg-[#8B9D77] w-full h-screen flex justify-center items-center'
    >
      <div className='max-w-[600px]'>
        <p className='font-lora text-4xl font-bold text-black underline text-center'>
          About Us
        </p>
        <div className='mt-6'>
          <p className='text-center'>
            The website dedicated to providing information about colleges in metropolitan areas is an invaluable resource
            for students seeking higher education options. With the rapid growth and development of urban centers,
            metropolitan areas offer a plethora of educational institutions, each with its own unique offerings and
            advantages.
            <br />
            <br />
            This specialized website aims to simplify the college search process for students interested in pursuing their
            studies in a metropolitan setting. It serves as a comprehensive platform that aggregates data from various
            colleges, including details about their academic programs, campus facilities, faculty profiles, admission
            requirements, and much more.
            <br />
            <br />
            By centralizing all this information, the website empowers prospective students to make informed decisions
            about their educational journey.
          </p>
        </div>
      </div>

      <p className='absolute flex text-center text-sm top-[100%]'>Copyright with Shrish</p>
    </motion.div>
  );
};

export default Aboutus;
