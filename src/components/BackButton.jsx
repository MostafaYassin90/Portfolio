import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate= useNavigate();

  return (
    <button onClick={() => {navigate(-1)}} className="w-fit text-[#111] dark:text-gray-300 flex items-center gap-2 text-xl mb-3 cursor-pointer">
      <span>Back</span>
      <IoIosArrowForward/>
    </button>
  )
}

export default BackButton