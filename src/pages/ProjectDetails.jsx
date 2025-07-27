import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../assets/assets";
import BackButton from "../components/BackButton";
import { motion } from "motion/react";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);


  // Get Single Project 
  const getSingleProject = () => {
    const projectData = ProjectsData.find((project) => project.id === id);
    if (projectData) {
      setProject(projectData)
    }
  }

  useEffect(() => {
    getSingleProject()
  }, [id])

  return project && (
    <div className="min-h-screen py-15 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">
      <div className="w-full xl:w-[1200px] mx-auto">

        {/* Back Button */}
        <motion.div initial={{ y: 250, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        >
          <BackButton />
          {/* Image */}
          <div className="relative cursor-pointer group w-full h-auto rounded-md overflow-hidden border-4 mb-5 border-[#070606] dark:border-gray-400">
            <img src={project.image} alt="project-image h-full h-full bg-center object-cover" />
            <div className="absolute w-full h-0 bottom-0 overflow-hidden transition-all duration-500 group-hover:h-full left-0 bg-black/50 flex items-center justify-center">
              <div className="flex items-center gap-10">
                <a href={project.github_url} target="_blank" className="inline-block text-[#111] dark:text-gray-100 border border-gray-[#111] dark:border-gray-400 rounded-full py-2 px-5 cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 bg-gray-100 dark:bg-gray-800">Github Repo</a>
                <a href={project.live_preview} target="_blank" className="inline-block text-[#111] dark:text-gray-100 border border-gray-[#111] dark:border-gray-400 rounded-full py-2 px-5 cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 bg-gray-100 dark:bg-gray-800">Live Preview</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details */}
        <div className="flex flex-col gap-5">

          {/* Title */}
          <motion.h2 initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-[#111] dark:text-gray-50 text-xl">{project.title}</motion.h2>

          {/* Description */}
          <motion.h3 initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#111] max-sm:text-sm dark:text-gray-200 text-base"> <span className="text-color text-xl font-semibold">Description:</span> {project.description}</motion.h3>

          {/* Tech Stack */}
          <motion.div initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="text-color text-xl font-semibold w-fit">Tech Stack: </h3>
            <div className="max-sm:flex flex-col gap-y-2 max-sm:text-sm">
              <div className="flex items-start gap-2 max-sm:gap-y-5">
                <h4 className="text-gray-[#111] max-sm:text-[16px] dark:text-gray-100 text-[18px] font-semibold">FrontEnd: </h4>
                <p className="text-gray-[#111] dark:text-gray-200">{project.tech_stack.frontend}</p>
              </div>
              <div className="flex items-start gap-2">
                <h4 className="text-gray-[#111] max-sm:text-[16px] dark:text-gray-100 text-[18px] font-semibold">BackEnd: </h4>
                <p className="text-gray-[#111] dark:text-gray-200">{project.tech_stack.backend}</p>
              </div>
              <div className="flex items-start gap-2">
                <h4 className="text-gray-[#111] max-sm:text-[16px] dark:text-gray-100 text-[18px] font-semibold">DataBase: </h4>
                <p className="text-gray-[#111] dark:text-gray-200">{project.tech_stack.database}</p>
              </div>
              <div className="flex items-start gap-2">
                <h4 className="text-gray-[#111] max-sm:text-[16px] dark:text-gray-100 text-[18px] font-semibold">Authentication: </h4>
                <p className="text-gray-[#111] dark:text-gray-200">{project.tech_stack.authentication}</p>
              </div>
              <div className="flex items-start gap-2">
                <h4 className="text-gray-[#111] max-sm:text-[16px] dark:text-gray-100 text-[18px] font-semibold">others: </h4>
                <p className="text-gray-[#111] dark:text-gray-200">{project.tech_stack.others}</p>
              </div>
              <div className="flex items-start gap-2">
                <h4 className="text-gray-[#111] max-sm:text-[16px] dark:text-gray-100 text-[18px] font-semibold">Hosting: </h4>
                <p className="text-gray-[#111] dark:text-gray-200">{project.tech_stack.hosting}</p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <h3 className="text-color text-xl font-semibold block w-fit">Features: </h3>
            <ul className="max-sm:text-sm w-fit pl-4 grid sm:grid-cols-2 gap-x-10 gap-y-3 items-start">
              {
                project.features.map((item, index) => (
                  <div key={index}>
                    <li key={index} className="text-[#111] dark:text-gray-200 list-disc">{item}</li>
                  </div>
                ))
              }
            </ul>
          </motion.div>

          {/* Technologies Logo */}
          <motion.div initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center gap-5 flex-wrap">
            {
              project.skills.map((item, index) => (
                <div key={index} className="w-[42px] h-[42px] bg-[#171717] p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110">
                  <img src={item} alt="skill-image" className="w-full h-full" />
                </div>
              ))
            }
          </motion.div>

          {/* Button for github + live preview */}
          <motion.div initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="flex items-center gap-10">
            <a href={project.github_url} target="_blank" className="inline-block text-[#111] dark:text-gray-100 border border-gray-[#111] dark:border-gray-400 rounded-full py-2 px-5 cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 bg-gray-100 dark:bg-gray-800">Github Repo</a>
            <a href={project.live_preview} target="_blank" className="inline-block text-[#111] dark:text-gray-100 border border-gray-[#111] dark:border-gray-400 rounded-full py-2 px-5 cursor-pointer transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 bg-gray-100 dark:bg-gray-800">Live Preview</a>
          </motion.div>



        </div>
        {/* Details */}
      </div>
    </div>
  )
}

export default ProjectDetails