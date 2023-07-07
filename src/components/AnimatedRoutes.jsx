import React from 'react';
import Management from './Management';
import Science from './Science';
import Law from './Law';
import Home from './Home';
import Colleges from './Colleges';
import AboutUs from './Aboutus'; // Import the AboutUs component
import { AnimatePresence, motion } from 'framer-motion'; // Import motion from framer-motion
import Contact from './Contact';

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <div className='w-full h-full rounded-lg bg-[#BBC6C8]'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* Replace <Routes> component with regular <div> */}
          <div>
            <a href="/colleges"></a>
            <a href="/aboutus"></a>
            <a href="/Science"></a>
            <a href="/Management"></a>
            <a href="/Law"></a>
            <a href="/"></a>
            <a href="/contactus"></a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Render components based on the current URL */}
          {window.location.pathname === '/colleges' && <Colleges />}
          {window.location.pathname === '/aboutus' && <AboutUs />}
          {window.location.pathname === '/Science' && <Science />}
          {window.location.pathname === '/Management' && <Management />}
          {window.location.pathname === '/Law' && <Law />}
          {window.location.pathname === '/' && <Home />}
          {window.location.pathname === '/contactus' && <Contact />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
