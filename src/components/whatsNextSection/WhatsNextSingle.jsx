import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const WhatsNextSingle = ({ name, year, align, type, image, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } 
                          justify-end
                      `}
    >
      <div>
        <h2
          className={`md:text-3xl sm:text-center sm:text-2xl text-orange ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        <span
          className={`text-lg flex gap-2 items-center text-gray-400 
        sm:justify-self-center ${
          align === "left" ? "md:justify-self-end" : "md:justify-self-start"
        }`}
        >
          {type === "university"
            ? "🎓 University Project"
            : " 💻 Personal Project"}
        </span>

        <p
          className={`text-white font-thin text-xl mt-2 sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {" "}
          {description}
        </p>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-[50%] absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default WhatsNextSingle;
