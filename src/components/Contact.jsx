import React, { useState } from 'react';
import { motion } from 'framer-motion';
import school from '../assets/school.png';
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaGithub } from 'react-icons/fa';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "66d038b3-2bbd-432a-a17b-44e3059da791",
      To: "vangogh0167@gmail.com",
      From: email,
      Subject: "Feedback",
      Body: feedback
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("Sent!"));
    }
  };
  

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      end={{ opacity: 0, transition: { duration: 4 } }}
      className='bg-white'
    >
      <img className='absolute sm:left-[-150px] sm:w-[880px] xs:w-[400px] xs:bottom-[2px] xs:left-[-120px]' src={school} alt='' />
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-bold text-gray-800 text-poppins absolute sm:top-[140px] sm:right-[200px] xs:top-[650px]'>
          Contact Us
        </h1>
        <div className='flex space-x-4 absolute sm:top-[180px] sm:left-[900px] xs:left-[170px] xs:top-[700px]'>
          <a href=''>
            <FaFacebook />
          </a>
          <a href=''>
            <FaTwitter />
          </a>
          <a href=''>
            <FaTiktok />
          </a>
          <a href=''>
            <FaInstagram />
          </a>
          <a href=''>
            <FaGithub />
          </a>
        </div>
        <form >
          <div className='absolute right-[250px] top-[210px]'>
            <h3 className='text-2xl'>Feedback</h3>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              className='bg-blue-200 w-[250px] h-[150px] rounded-lg absolute px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent'
              placeholder='Feedback'
            />
          </div>
          <div className='top-[450px] right-[250px]'>
            <p className='text-lg text-gray-800 text-poppins absolute sm:top-[470px] sm:left-[890px] xs:top-[470px] xs:left-[140px]'>
              Drop your email here
            </p>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              className='bg-blue-200 w-[200px] h-[50px] rounded-lg absolute px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent top-[500px] right-[150px]'
              placeholder='Email'
            />
            <button onSubmit={handleSubmit}
              type='submit'
              className='bg-emerald-700 text-white rounded-lg px-4 py-2 absolute top-[510px] right-[60px]'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default FeedbackForm;
