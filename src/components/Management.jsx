import React from 'react'
import ccrc from '../assets/ccrc.jpg';
import st from '../assets/stxavi.jpg';
import global from '../assets/Global.jpg';
import kcm from '../assets/kcm.jpg';
import { motion } from 'framer-motion';

const Management = () => {
  return (
    <motion.div
    className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#BBC6C8]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    end={{ opacity: 0, transition: { duration: 4 } }}
  >
    <p className="text-3xl font-poppins underline text-center">Colleges</p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      <div className="flex flex-col justify-center rounded-lg items-center bg-slate-400 py-3 px-4">
        <img className="w-48 h-20 rounded-lg" src={global} alt="Global College of Management" />
        <p>
          <span className="font-semibold text-xl">Global College of Management</span> <br />
          Establishment: 1996 A.D. <br />
          Location: Mid-Baneshwor, Kathmandu, Nepal <br />
          Phone no: +977 1-5970316 <br />
          Website: <a href="https://web.globalcollege.edu.np/">web.globalcollege.edu.np</a> <br />
          Remarks: Global College of Management is a private college that offers a variety of programs, including +2 in Management, BBA, and MBA. Global College of Management has a strong academic reputation and has been consistently ranked among the top colleges in Nepal. Global College of Management also has a strong extracurricular program, which includes sports, clubs, and societies.
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-lg items-center bg-slate-400 py-3 px-4">
        <img className="w-48 h-20 rounded-lg" src={kcm} alt="Kathmandu College of Management" />
        <p>
          <span className="font-semibold text-xl">Kathmandu College of Management</span> <br />
          Establishment: 1997 A.D. <br />
          Location: Gwarko, Lalitpur, Nepal <br />
          Phone no: +977 1-5970338 <br />
          Website: <a href="https://www.kcm.edu.np/">kcm.edu.np</a> <br />
          Remarks: Kathmandu College of Management is a private college that offers a variety of programs, including BBA in Marketing and BBA in Finance and Banking. Kathmandu College of Management is affiliated with Kathmandu University and has a strong academic reputation. Kathmandu College of Management also has a strong extracurricular program, which includes sports, clubs, and societies.
        </p>
      </div>
      
      <div className="flex flex-col justify-center rounded-lg items-center bg-slate-400 py-3 px-4">
        <img className="w-48 h-20 rounded-lg" src={st} alt="St. Xavier's College" />
        <p>
          <span className="font-semibold text-xl">St. Xavier's College</span> <br />
          Location: Maitighar, Kathmandu, Nepal <br />
          Establishment: 1988 AD <br />
          Phone Number: +977-01-5321365, 5344636 <br />
          Web Address: <a href="https://www.sxc.edu.np/">sxc.edu.np</a> <br />
          Remarks: St. Xavier's College is a highly respected institution in Nepal and is known for its academic excellence. The College offers a wide range of courses at the secondary and tertiary levels and has a strong focus on developing students' critical thinking skills and their ability to contribute to society.
        </p>
      </div>


      <div className="flex flex-col justify-center rounded-lg items-center bg-slate-400 py-3 px-4">
        <img
          className="w-48 h-20 rounded-lg"
          src={ccrc}
          alt="Capital College of Research Center (CCRC)"
        />
        <p>
          <span className="font-semibold text-xl">Capital College of Research Center (CCRC)</span>
          <br />
          Establishment: 2001 A.D. <br />
          Location: Balkumari, Kathmandu, Nepal <br />
          Phone no: +977 1-5100456 <br />
          Website: <a href="https://ccrc.edu.np/">ccrc.edu.np</a> <br />
          Remarks: CCRC is a private college that offers a variety of programs, including +2 in Science and Management. CCRC has a strong academic reputation and has been consistently ranked among the top colleges in Nepal. The college has a well-qualified faculty and state-of-the-art facilities. CCRC also has strong extra programs, which include sports, clubs, and societies.
        </p>
      </div>


    </div>
  </motion.div>
  )
}

export default Management
