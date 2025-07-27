import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrolling, setScrolling] = useState(1000);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY >= scrolling) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)

      }
    }

    window.addEventListener("scroll", handleScroll)
  }, []);


  return (
    <div 
    onClick={() => {scrollTo({top:0, left:0, behavior: "smooth"})}} 
    className={`${showScrollToTop ? "fixed" : "hidden"} right-[10px] bottom-[80px] w-9 h-9 bg-[#111] dark:bg-gray-200 text-white dark:text-[#111] flex items-center justify-center border  border-[#111] dark:border-gray-800 rounded-md cursor-pointer shadow-md shadow-[#B923E1]`}>
      <FaArrowUp />
    </div>
  )
}

export default ScrollToTop