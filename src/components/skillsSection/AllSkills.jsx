import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "React", icon: FaReact },
  { skill: "NextJS", icon: RiNextjsLine },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Prisma", icon: SiPrisma },
  { skill: "MongoDB", icon: BiLogoMongodb },
  { skill: "Firebase", icon: IoLogoFirebase },
  { skill: "Tailwind", icon: RiTailwindCssFill },
  { skill: "GitHub", icon: FaGithub },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
