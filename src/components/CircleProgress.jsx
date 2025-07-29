import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'motion/react';

const CircleProgress = ({ percentAge, skill, image, delay }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false })


  useEffect(() => {
    if (inView) {
      let start = 0;

      const intervalId = setInterval(() => {
        start += 1;
        if (start <= percentAge) {
          setProgress(start)
        } else {
          clearInterval(intervalId)
        }

      }, 20)
    }

  }, [percentAge, inView])

  return (
    <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: delay }}
      ref={ref} className='relative flex flex-col gap-3 items-center text-center'>

      <div className='absolute z-5 top-[80px] text-gray-800 dark:text-gray-100 text-sm p-2:'>
        <p className='text-white'>{progress}%</p>
      </div>

      <div className='relative w-[120px] h-[120px] rounded-full'>
        <div className='absolute z-2 w-full h-full rounded-full' style={{ background: `conic-gradient(#B923E1 ${(progress / 100) * 360}deg, #aaa 0deg)` }}></div>
        <div className='absolute z-3 w-[85%] h-[85%] bg-[#13141b] rounded-full top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex items-center justify-center'>
          <img loading="lazy" src={image} alt='skill_logo' className={`w-[50%] h-[50%] mb-3`} />
        </div>
      </div>

      <div className='text-gray-800 dark:text-gray-100 font-semibold'>
        <h2>{skill}</h2>
      </div>

    </motion.div>
  )
}

export default CircleProgress