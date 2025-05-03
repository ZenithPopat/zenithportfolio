import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import WhatsNextSingle from "./WhatsNextSingle";
import WhatsNextText from "./WhatsNextText";

const upcoming = [
  {
    name: "Thesis - 2D/3D Gaussian Splatting Web Viewer",
    year: "Ongoing",
    align: "right",
    type: "university",
    image: "../../images/3dpc.jpeg",
    description:
      "Developing an interactive 2D/3D Gaussian Splatting viewer using BabylonJS for visualizing complex data structures on the web. This project blends real-time rendering with research-driven implementation, contributing toward my master's thesis.",
  },
  {
    name: "Personal Full-Stack App (Private)",
    year: "Ongoing",
    align: "left",
    image: "../../images/website-img-2.webp",
    type: "personal",
    description:
      "Working on a full-stack web application to explore advanced features in authentication, real-time communication, and scalable architecture using Next.js, Prisma, and PostgreSQL. (Details of this project are kept private for now.)",
  },
];

const WhatsNextMain = () => {
  return (
    <div id="whatsnext" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <WhatsNextText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {upcoming.map((up, index) => {
          return (
            <WhatsNextSingle
              key={index}
              name={up.name}
              year={up.year}
              description={up.description}
              type={up.type}
              align={up.align}
              image={up.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhatsNextMain;
