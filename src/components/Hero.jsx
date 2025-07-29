import { assets } from '../assets/assets';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div
      className='py-20 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]'>

      <div className='flex flex-col gap-6 items-center text-center'>

        {/* image */}
        <motion.div initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          className='border-4 border-dotted border-gray-600 rounded-full p-2'>
          <img src={assets.profile_picture} alt='hero profile picture' className='rounded-full object-cover bg-center w-[300px]' />
        </motion.div>

        {/* Details */}
        <div>
          <motion.h1 initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className='mb-6'>
            <span className='text-color text-5xl font-bold'>
              <span>I'm </span>
              <Typewriter
                words={['Mostafa AboElenein', 'Frontend Developer']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          >
            <p className='mb-3 text-gray-800 dark:text-gray-100 w-[70%] text-center mx-auto'>I'm a Frontend Developer passionate about building responsive and interactive web applications using React, Tailwind CSS, and modern web technologies.</p>
            <p className='text-gray-800 dark:text-gray-200'>Let's build something great together!</p>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div initial={{ y: 350, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          className='flex items-center gap-10'>
          <a href='https://github.com/MostafaYassin90' target='_blank' className='py-3 px-5 bg-color text-white rounded-full w-[150px] cursor-pointer transition-all duration-300 hover:scale-105'>GitHub</a>
          <a href="/resume.pdf" target='_blank' className='py-3 px-5 w-[150px] rounded-full text-gray-800 border border-gray-800 dark:text-gray-100 dark:border-gray-400 cursor-pointer transition-all duration-300 hover:scale-105'>My Resume</a>
        </motion.div>

      </div>

    </div>
  )
}

export default Hero