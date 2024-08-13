import { MdWbSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";






function Header({ isDark, setIsDark, menu, setMenu }) {

  return (
    <header className='px-[60px] md:px-[30px] pt-4 flex justify-between items-center h-[100px]'>

      <h1 className={`cursor-pointer font-bold font-sans text-3xl  ${isDark ? "text-white hover:text-gray-100" : "text-black hover:text-gray-900"} first-letter:text-indigo-500 `}>
        You<span className="first-letter:text-indigo-500">
          Dev
        </span>
      </h1>
      <ul className={`flex flex-row gap-8  font-semibold font-sans text-lg  lg:hidden`}>
        <li className={`cursor-pointer hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Home</li>
        <li className={`cursor-pointer hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>About</li>
        <li className={`cursor-pointer hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Technologies</li>
        <li className={`cursor-pointer hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Projects</li>
        <li className={`cursor-pointer hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Contact</li>
      </ul>


      <div className="flex gap-4 lg:hidden">
        <button className={`font-sans font-bold h-[40px] w-[120px] rounded-lg bg-indigo-500 hover:bg-indigo-300 text-white  `}>
          Hire Me
          </button>
        <button  onClick={() => setIsDark(!isDark)}>
          {isDark ?
            <IoMoonSharp className="text-gray-300" />
            : <MdWbSunny className="text-yellow-500" />}
        </button>
      </div>
      <button onClick={() => setMenu(!menu)} className="hidden md:flex">
        {
          menu ?
            <MdClose className={`cursor-pointer text-4xl font-bold 
            ${isDark ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"}  `} />
            : <RiMenu3Fill className={`cursor-pointer text-4xl font-extrabold 
            ${isDark ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"}  `} />
        }

      </button>

    </header>
  )
}

export default Header
