import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";




function HeroSection({ isDark }) {
  return (
    <div className={`py-8 px-4 h-[550px] ${isDark ? "bg-gray-800" : "bg-gray-100"} w-full grid grid-cols-2 lg:grid-cols-1 gap-4`}>
      <div className={`Image  relative border-4 border-black   `}>
        





      </div>
      <div className='flex flex-col justify-center '>
        <h1 className={`font-bold font-sans text-[50px] lg:text-center md:text-[24px] ${isDark ? "text-white " : "text-dark-blue "}  `}>I'm 
           <span className='text-indigo-700'> Youssef EL HAOUIL </span>
          </h1>
        <h3 className={`font-bold font-sans text-[30px] text-gray-600 lg:text-center md:text-[24px] ${isDark ? "text-white " : "text-dark-blue "}  `}>Full Stack Developper </h3>
        <p className={`pt-4 font-normal font-sans text-[16px] text-pretty md:text-[24px] ${isDark ? "text-gray-300 " : "text-dark-blue "}  `}>
        a passionate Full-Stack Web Developer from Morocco. 
        With a strong foundation in both front-end and back-end technologies, 
        I’m passionate about creating seamless, 
        engaging web experiences.
        </p>
        <div className='flex flex-row gap-4'>
          <span className='h-10 w-1/3 bg-indigo-700 hover:bg-indigo-500 rounded-lg flex justify-center items-center '>
            <a  href="https://www.linkedin.com/in/youssef-el-haouil-3b9b08205/"><FaLinkedinIn className='text-2xl font-bold  text-white ' />  </a>
          </span>
          <span className='h-10 w-1/3 bg-indigo-700 hover:bg-indigo-500 rounded-lg flex justify-center items-center '>
            <a href="https://github.com/Youssefelhaouil"><FaGithub className='text-2xl font-bold  text-white ' /> </a>
          </span>
          <span className='h-10 w-1/3 bg-indigo-700 hover:bg-indigo-500 rounded-lg flex justify-center items-center '>
            <a href="https://www.linkedin.com/in/youssef-el-haouil-3b9b08205/"><SiFrontendmentor className='text-2xl font-bold  text-white ' /> </a>
          </span>
          

        </div>
      </div>
    </div>
  )
}

export default HeroSection
