import { assets } from "../assets/assets"

const Title = ({title, align}) => {
  return (
    <div className={`relative mb-15 w-fit ${align ? align : "mx-auto"}`}>
      <h1 className='relative z-3 text-gray-800 dark:text-gray-100 font-bold text-4xl'>{title}</h1>
      <img src={assets.theme_pattern} alt='shape' className='absolute z-2 w-20 right-[-10px] bottom-[-10px]' />
    </div>
  )
}

export default Title