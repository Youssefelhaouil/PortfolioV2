import React from 'react'
import { MdWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";

function Dark({isDark,setIsDark}) {
  return (
    <div className="flex gap-4 lg:flex-col ">
        <button  className={`lg:hidden font-sans font-bold h-[40px] w-[120px] rounded-lg bg-indigo-500 hover:bg-indigo-300 text-white  `}>
           <a href="https://www.linkedin.com/in/youssef-el-haouil-3b9b08205/" target='_blank'>Hire Me</a>
        </button>
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ?
            <IoMoonSharp className="text-gray-300" />
            : <MdWbSunny className="text-yellow-500" />}
        </button>
      </div>
  )
}

export default Dark
