import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const heroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Zenith Popat
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white "
      >
        A Passionate Full-Stack Web Developer with
        <br /> 3+ years of experience, specializing in React,
        <br /> Next.js, and TypeScript to build scalable,
        <br /> high-performance web applications with clean,
        <br /> maintainable code.
      </motion.p>
      <motion.a
        variants={fadeIn()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center
                        mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center
                        text-white hover:text-cyan ease-in-out"
        href="../../../pdfs/Zenith Popat.pdf"
        download="Zenith_Popat_Resume.pdf"
      >
        Download Resume
      </motion.a>
      {/* <motion.a
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center
                        mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center
                        text-white hover:text-cyan ease-in-out"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Get in Touch
      </motion.a> */}
    </div>
  );
};

export default heroText;
