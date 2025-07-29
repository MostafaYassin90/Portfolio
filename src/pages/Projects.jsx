import { ProjectsData } from "../assets/assets";
import BackButton from "../components/BackButton";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

const Projects = () => {
  return (
    <div className="min-h-screen py-15 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">

      {/* Title */}
      <Title title={"My Projects"} align={"mx-start"} />

      <div className="flex items-center justify-between gap-5 px-1">
        <BackButton />
        <div>
          <p className="text-[#111] dark:text-gray-300">Projects: {ProjectsData.length}</p>
        </div>
      </div>

      {/* Show Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {
          ProjectsData.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Projects