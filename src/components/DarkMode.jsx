import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const mode = theme === "light" ? "dark" : "light";
    setTheme(mode)
    document.documentElement.classList.toggle("dark", mode === "dark")
    window.localStorage.setItem("theme", mode)
  }

  useEffect(() => {
    window.localStorage.setItem("theme", localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark")
    setTheme(localStorage.getItem("theme") || "light")
    document.documentElement.classList.toggle("dark", localStorage.getItem("theme") === "dark")
  }, [])

  return (
    <div className="fixed bottom-[20px] right-[10px]">

      {
        theme === "light"
          ?
          <button onClick={toggleTheme} className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-[#B923E1] shadow-md z-100 bg-[#111] dark:bg-gray-200">
            <FaMoon className="text-xl text-white dark:text-[#111]" />
          </button>
          :
          <button onClick={toggleTheme} className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-[#B923E1] shadow-md z-100 bg-[#111] dark:bg-gray-200">
            <IoSunnyOutline className="text-xl text-white dark:text-[#111]" />
          </button>
      }


    </div>
  )
}

export default DarkMode