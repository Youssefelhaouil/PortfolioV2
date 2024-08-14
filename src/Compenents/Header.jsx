import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Dark from "./Dark";
import Nav from "./Nav";






function Header({ isDark, setIsDark, menu, setMenu }) {

  return (
    <header className='px-[60px] md:px-[30px] pt-4 flex justify-between items-center h-[100px] '>

      <h1 className={`cursor-pointer font-bold font-sans text-3xl  ${isDark ? "text-white hover:text-gray-100" : "text-black hover:text-gray-900"} first-letter:text-indigo-500 `}>
        You<span className="first-letter:text-indigo-500">
          Dev
        </span>
      </h1>
      <ul className={`flex flex-row gap-8   font-sans text-lg shadow-xl px-6 py-4 rounded-full  lg:hidden`}>
        <li className={`cursor-pointer font-bold hover:font-[700] ${isDark ? "text-indigo-400 hover:text-indigo-500" : "text-indigo-500 hover:text-indigo-400"}`}>Home</li>
        <li className={`cursor-pointer font-semibold hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>About</li>
        <li className={`cursor-pointer font-semibold hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Technologies</li>
        <li className={`cursor-pointer font-semibold hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Projects</li>
        <li className={`cursor-pointer font-semibold hover:font-[700] ${isDark ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-black"}`}>Contact</li>
      </ul>


      <div className="lg:hidden">
        <Dark isDark={isDark} setIsDark={setIsDark} />
      </div>
      {
        menu ?
          <div className="hidden lg:flex">
            <button onClick={() => setMenu(!menu)} >
              <MdClose className={`cursor-pointer text-4xl font-bold 
            ${isDark ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"}  `} />
            </button>
          </div>

          :
          <button onClick={() => setMenu(!menu)} className="hidden lg:flex">
            <RiMenu3Fill className={`cursor-pointer text-4xl font-bold 
            ${isDark ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"}  `} />
          </button>
      }



    </header>
  )
}

export default Header
