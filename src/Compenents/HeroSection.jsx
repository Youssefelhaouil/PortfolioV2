import React from 'react';


import { FaArrowDown } from "react-icons/fa6";




function HeroSection({ isDark }) {
  return (
    <div className={`pt-8  px-4  lg:py-1 h-[550px] ${isDark ? "bg-gray-800" : "bg-gray-100"} w-full grid grid-cols-2 lg:grid-cols-1 gap-4 shadow-md`}>
      <div className={`Image  relative `}>
      </div>
      <div className='flex flex-col justify-center  '>
        <h1 className={`font-bold font-sans text-[50px] lg:text-center md:text-[24px] ${isDark ? "text-white " : "text-dark-blue "}  `}>I'm
          <span className='text-indigo-700'> Youssef EL HAOUIL </span>
        </h1>
        <h3 className={`font-bold font-sans text-[30px] text-gray-600 lg:text-center md:text-[24px] ${isDark ? "text-white " : "text-dark-blue "}  `}>Full Stack Developper </h3>
        <p className={`pt-4 font-normal font-sans text-[16px] text-pretty md:text-[24px] ${isDark ? "text-gray-300 " : "text-dark-blue lg:hidden "}  `}>
          a passionate Full-Stack Web Developer from Morocco.
          With a strong foundation in both front-end and back-end technologies,
          I’m passionate about creating seamless,
          engaging web experiences.
        </p>
        <div className='pt-8 flex lg:justify-center'>
          <button className='flex justify-center  items-center gap-2 px-3 py-1 h-10 w-1/4 bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg font-bold font-sans text-[18px]'>
            Contact <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
