import { ProjectsData } from '../assets/assets';
import Title from './Title';
import ProjectCard from './ProjectCard';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const LatestWorks = () => {
  const navigate = useNavigate();

  return (
    <div className='py-20 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]'>

      <Title title={"My latest work"} />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:px-14'>
        {
          ProjectsData.slice(0, 6).map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} delay={project.delay}/>
            </div>
          ))
        }
      </div>

      {/* Show More */}
      <div className='flex justify-center mt-12'>
        <button onClick={() => { navigate("/projects"), scrollTo(0,0) }} className='text-black dark:text-white text-xl flex items-center gap-2 border border-black dark:border-white py-3 px-10 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-400 dark:hover:bg-gray-900 group'>
          <span>Show More</span>
          <span className='mt-1 transition-all duration-300 group-hover:translate-x-1.5'><FaArrowRightLong /></span>
        </button>
      </div>

    </div>
  )
}

export default LatestWorks