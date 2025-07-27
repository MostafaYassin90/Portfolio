import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY >= 1500) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (

    <motion.div initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
      className={`z-50 border-b border-gray-600 h-[65px] py-4 px-[3vw] sm:px[4vw] md:px-[5vw] lg:px-[5vw] flex items-center justify-between transition-all duration-500 transform ease-in-out bg-gray-50 dark:bg-[#111] ${showNavbar ? "fixed top-0 left-0 w-full" : "relative"}`}>

      {/* Logo */}
      <div onClick={() => { navigate("/") }} className="relative w-fit">
        <h2 className="relative z-2 text-3xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 text-gray-800 dark:text-gray-100"><span className="text-[#B923E1]">P</span>ort<span className="text-[#B923E1]">F</span>olio</h2>
        <img src={assets.theme_pattern} loading="lazy" alt="shape" className="z-1 absolute w-10 right-0 bottom-[-3px]" />
      </div>

      {/* Links */}
      <div className={`max-sm:hidden`}>
        <ul className="flex items-center gap-4">
          <li> <a href="/" className="scroll-behavior px-2 text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:text-[#B923E1]">Home</a> </li>
          <li> <a href="#about" className="scroll-behavior px-2 text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:text-[#B923E1]">About</a> </li>
          <li> <a href="#skills" className="scroll-behavior px-2 text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:text-[#B923E1]">Skills</a> </li>
          <li> <a href="#projects" className="scroll-behavior px-2 text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:text-[#B923E1]">Projects</a> </li>
          <li> <a href="#contact" className="scroll-behavior px-2 text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:text-[#B923E1]">Contact</a> </li>
        </ul>
      </div>

      {/* Button */}
      <a href="#contact" className="scroll-behavior hidden md:block py-2 px-3 rounded-full text-white text-sm font-medium bg-color cursor-pointer transition-all duration-300 hover:scale-105">Connect With Me</a>

      {/* Menu */}
      <button className={`min-sm:hidden rounded-md cursor-pointer flex items-center justify-center w-10 h-10`} onClick={() => { setShowMenu((prev) => !prev) }}>
        {
          showMenu
            ?
            <IoCloseOutline className="text-gray-800 dark:text-gray-100 text-3xl" />
            :
            <IoIosMenu className="text-gray-800 dark:text-gray-100 text-4xl" />
        }
      </button>

      {/* Responsive Links */}
      <div className={`absolute bg-gray-100 dark:bg-[#070606] border-b border-gray-400 py-3 top-[100%] right-0 overflow-hidden transition-all duration-500 ${showMenu ? "w-full" : "w-0"} sm:w-0`}>
        <ul className="flex flex-col gap-1">
          <li> <a href="/" className="px-3 py-3 block text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:bg-[#ddd] dark:hover:bg-[#444]">Home</a> </li>
          <li> <a href="#about" className="px-3 py-3 block text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:bg-[#ddd] dark:hover:bg-[#444]">About</a> </li>
          <li> <a href="#skills" className="px-3 py-3 block text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:bg-[#ddd] dark:hover:bg-[#444]">Skills</a> </li>
          <li> <a href="#projects" className="px-3 py-3 block text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:bg-[#ddd] dark:hover:bg-[#444]">Projects</a> </li>
          <li> <a href="#contact" className="px-3 py-3 block text-gray-800 font-medium dark:text-gray-100 transition-all duration-300 hover:bg-[#ddd] dark:hover:bg-[#444]">Contact</a> </li>
        </ul>
      </div>

    </motion.div>

  )
}

export default Navbar