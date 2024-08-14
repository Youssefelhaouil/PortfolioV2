import React from 'react';
import { motion } from 'framer-motion';


function Nav({ isDark, menu }) {
  return (
    <motion.div
      className={`hidden lg:flex lg:h-screen lg:w-full pt-8`}
      initial={{ x: menu ? '100%' : 0 }}
      animate={{ x: menu ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <ul className={`w-full flex flex-col justify-start items-center gap-8 font-semibold font-sans text-lg px-6 text-center`}>
        <li className={`w-full cursor-pointer hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>
          Home</li>
        <li className={`cursor-pointer w-full hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>
          About</li>
        <li className={`cursor-pointer w-full hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>
          Technologies</li>
        <li className={`cursor-pointer w-full hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>
          Projects</li>
        <li className={`cursor-pointer w-full hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>
          Contact</li>


        <li className={`cursor-pointer w-full pt-10`}>
          <button className={`font-sans font-bold h-[40px] w-full rounded-lg text-white bg-indigo-500 hover:bg-indigo-300`}>
            <a href="https://www.linkedin.com/in/youssef-el-haouil-3b9b08205/" target='_blank'>Hire Me</a>
          </button>
        </li>

      </ul>
    </motion.div>
  );
}

export default Nav;
