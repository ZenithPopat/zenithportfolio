import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experineces = [
  {
    job: "Product Development Engineer",
    companyName: "CodeTantra Tech Solution Pvt Ltd",
    date: "2020-2021",
    responsibilities: [
      "Built exam monitoring tools with Java and JavaScript.",
      "Created interactive video features and handled QA/debugging.",
    ],
  },
  {
    job: "Web Developer (Working Student)",
    companyName: "CibusCell Technology GmbH",
    date: "2021-2022",
    responsibilities: [
      "Initiated the development of a modular green energy platform using Next.js and TypeScript. Set up architecture and implemented foundational modules before project handoff.",
    ],
  },
  {
    job: "Web Developer (Working Student)",
    companyName: "Everest Solutions GmbH",
    date: "2022-2024",
    responsibilities: [
      "Improved performance by 15% using modular TypeScript components.",
      "Built full-stack features and a custom tagging system to boost UX.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experineces.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
