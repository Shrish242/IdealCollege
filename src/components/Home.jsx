import React from 'react';
import Head1 from './Head1';
import Features from './Features';
import Structure from './Structure';
import Stats from './Stats';
import Footer from './Footer';
import {motion} from 'framer-motion'
import Searchbar from './Searchbar';
import data from '../Data.json';

const Home = () => {
  // Define placeholder and data arrays
  const placeholder = 'Search';

  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    end={{opacity:0 , transition: { duration: 4 }}} className='bg-white'>
              <Head1 />
              <Searchbar placeholder={placeholder} data={data} />
        <Features />
        <Structure /> {/* Include the Structure component */}
        <Stats />
        <Footer />
      </motion.div>
    // </div>
  );
};

export default Home;
