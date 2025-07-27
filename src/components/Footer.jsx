import { connectData } from "../assets/assets"

const Footer = () => {
  return (
    <div className="py-3 border-t border-gray-600 text-sm font-medium px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw] text-gray-800 dark:text-gray-100 flex max-[700px]:flex-col-reverse flex-row items-center justify-between gap-2">
      <div>Made With Love By Mostafa Yassin © {new Date().getFullYear()}</div>
      <div className="flex items-center gap-3">
        {
          connectData.map((item, index) => (
            <a href={item.path} key={index}
              className="inline-block text-gray-800 dark:text-gray-100 transition-all duration-300 hover:text-[#B923E1]"
            >{item.title}</a>
          ))
        }
      </div>
    </div>
  )
}

export default Footer