import React from 'react'

const Structure = () => {
  return (
    <div>
      <p className='sm:text-2xl absolute sm:left-[470px] font-poppins my-3 mx-7  px-3 py-4  sm:top-[125%] xs:top-[450px] xs:left-[120px] font-semibold ' >
        Why better college?</p>
        <div className="grid grid-cols-1 mx-5 absolute top-[900px] left-[250px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 sm:left-[300px] sm:top-[800px] xs:top-[500px] xs:left-[100px] ">
      <div className="flex flex-col justify-center rounded-lg items-center w-[200px] h-[240px] bg-green-300  py-3 px-4 my-4 mx-4">
        <p className='text-xl font-poppins  left-[35%] top-[128%]  font-semibold '>
          Facilities</p><hr/>
        <p>College facilities  refer resources provided by educational institutions to support the academic and social  needs of students and faculty. </p>
        </div>	
        <div className="flex flex-col justify-center rounded-lg items-center w-[200px] h-[240px] bg-violet-300  bottom-[-540px] left-[500px] py-3 px-4 my-4 mx-4">
          <p className='text-xl font-poppins  left-[35%] top-[128%]  font-semibold '>
          Study Environment</p>
          <p> Minimize distractions by finding a quiet location where you can concentrate without disruptions.</p>
        </div>
        <div className="flex flex-col justify-center rounded-lg items-center w-[200px] h-[240px] bg-sky-300  bottom-[-540px] left-[800px] py-3 px-4 my-4 mx-4">
        <p className='text-xl font-poppins  left-[35%] top-[128%]  font-semibold '>
          Experience </p>
          <p>Experience is the process through which conscious organisms perceive the world around them.</p>
        </div>
        <p className='sm:text-2xl font-poppins absolute sm:left-[8%] sm:top-[130%] xs:text-lg xs:top-[850px] xs:right-[-90px] whitespace-nowrap font-semibold '>
          Search the Ideal College for you here with us.
        </p>
    </div>
    </div>
    
  )
}

export default Structure
