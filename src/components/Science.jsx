import React from 'react'
import ccrc from '../assets/ccrc.jpg'
import kmc from '../assets/kmc.jpg'
import st from '../assets/stxavi.jpg'
import trinity from '../assets/trinity.jpg'
import xavier from '../assets/xavier.jpg'
import { motion } from 'framer-motion';

const Science = () => {
  return (
    <motion.div
    className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#BBC6C8]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    end={{ opacity: 0, transition: { duration: 4 } }}
  >
    <p className="text-3xl font-poppins underline text-center">Science Colleges</p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
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
        <img className="w-48 h-20 rounded-lg" src={kmc} alt="Kathmandu Model College" />
        <p>
          <span className="font-semibold text-xl">Kathmandu Model College</span> <br />
          Establishment: 1992 <br />
          Location: Bagbazar, Kathmandu, Nepal <br />
          Phone no: +977 1-4257019 <br />
          Website: <a href="http://kmcen.edu.np/">kmcen.edu.np</a> <br />
          Remarks: Overall, KMC is a great choice for students who want to get a quality education in a supportive environment. The college offers a variety of programs with strong co-curricular programs, has a good academic reputation, and is a popular choice for students.
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-lg items-center bg-slate-400 py-3 px-4">
        <img className="w-48 h-20 rounded-lg" src={trinity} alt="Trinity College" />
        <p>
          <span className="font-semibold text-xl">Trinity College</span> <br />
          Location: Dillibazar Height, Kathmandu, Nepal <br />
          Establishment: 1996 AD <br />
          Phone Number: +977-01-4445955, 4445956 <br />
          Web Address: <a href="https://www.trinity.edu.np/">trinity.edu.np</a> <br />
          Remarks: Trinity College is a private, co-educational college in Kathmandu, Nepal. It was founded in 1996 by a group of educationists who were committed to providing quality education to the people of Nepal. The college offers a wide range of undergraduate programs in the fields of arts, science, and commerce.
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-lg items-center bg-slate-400 py-3 px-4">
        <img className="w-48 h-20 rounded-lg" src={xavier} alt="Xavier International College" />
        <p>
          <span className="font-semibold text-xl">Xavier International College</span> <br />
          Establishment: 2001 A.D. <br />
          Location: Kalopul, Kathmandu, Nepal <br />
          Phone no: +977 1-4410341 <br />
          Website: <a href="https://xaviercollege.edu.np/">xaviercollege.edu.np</a> <br />
          Remarks: Xavier International College is a private college that offers a variety of programs, including +2 in Science, Management, and Mass Communication. Xavier International College has a strong academic reputation and has been consistently ranked among the top colleges in Nepal. Xavier International College also has strong extra programs, which include sports, clubs, and societies.
        </p>
      </div>
      </div>
      </motion.div>
  )
}

export default Science