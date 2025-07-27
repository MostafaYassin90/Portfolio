import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'motion/react';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: project.delay }}
      key={project.id} className='rounded-md overflow-hidden border-3 border-[#13141b] shadow-gray-800 shadow-sm'>

      <div
        onClick={() => { navigate(`/projects/project/${project.id}`); scrollTo(0, 0) }}
        className='relative group h-[200px] lg:h-[250px] cursor-pointer group overflow-hidden'>
        <img src={project.image} className='h-full w-full bg-center rounded-tl-md rounded-tr-md transition-all duration-300 group-hover:scale-105' />
        <div className='absolute text-[#fff] w-full h-0 left-0 bottom-0 flex items-center justify-center bg-black/50 transition-all duration-300 group-hover:h-full'>
          <div className='flex items-center justify-center gap-3 mt-5'>
            <FaArrowLeft />
            <p className='text-[#fff] text-2xl font-semibold'>Project Info</p>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className='bg-[#13141b] py-5 px-2.5'>
        <h2 className='text-gray-100 mb-5 min-xl:text-[18px] font-medium whitespace-nowrap overflow-hidden text-ellipsis'>{project.title}</h2>
        <div className='flex items-center gap-5 justify-center flex-wrap'>
          <a href='' onClick={() => { navigate(`/projects/project/${project.id}`); scrollTo(0, 0) }} className='inline-block text-center text-white w-[130px] py-2 px-3 rounded-full border border-gray-400 transition-all duration-300 hover:bg-[#fff1] cursor-pointer'>More Details</a>
          <a href={project.github_url} target='_blank' className='inline-block text-center text-white w-[130px] py-2 px-3 rounded-full border border-gray-400 transition-all duration-300 hover:bg-[#fff1] cursor-pointer'>Github Rebo</a>
          <a href={project.live_preview} target='_blank' className='inline-block text-center text-white w-[130px] py-2 px-3 rounded-full border border-gray-400 transition-all duration-300 hover:bg-[#fff1] cursor-pointer'>View Project</a>
        </div>
      </div>

    </motion.div>
  )

};

export default ProjectCard;