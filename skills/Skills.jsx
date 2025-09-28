import { motion } from "motion/react";
import { SkillsInfo } from "../src/constants";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <section
      id="skills"
      className="py-1 pb-24 px-[12vw] bg-skills-gradient clip-path-custom"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mt-3">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of some of our technical skills and expertise honed through
          various projects and experiences.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              className="w-full max-w-sm mx-auto"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-3 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8"
                    />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
