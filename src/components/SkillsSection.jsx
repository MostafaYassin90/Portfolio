import Title from "./Title";
import { skillsData } from "../assets/assets";
import CircleProgress from "./CircleProgress";

const SkillsSection = () => {
  return (
    <div id="skills" className="py-20 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw] flex flex-col gap-5 items-center">
      <Title title={"Technical Skills"} />

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-10">
        {
          skillsData.map((skill, index) => (
            <div key={index}>
              <CircleProgress
                percentAge={skill.percentAge}
                skill={skill.skill}
                image={skill.image}
                delay={skill.delay}
              />

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default SkillsSection