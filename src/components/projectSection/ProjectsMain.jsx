import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Developer Portfolio Website",
    year: "Date: 2024 - Present",
    align: "right",
    image: "../../images/portfolio.png",
    link: "#",
    type: "live",
    description:
      "Built with React, Tailwind, and Framer Motion. Features a responsive design, interactive UI, and smooth scrolling experience to showcase professional profile, experience, and projects.",
  },
  {
    name: "Beyond Zenith - Blog Platform",
    year: "Date: 2024 - Present",
    align: "left",
    image: "../../images/blog.png",
    link: "#",
    type: "deployment",
    description:
      "Created a minimal blog using Next.js and Markdown. Focuses on developer insights, tutorials, and technical notes, fully responsive and SEO-optimized.",
  },
  {
    name: "Task Manager WebApp",
    year: "Date: 2024 - Present",
    align: "right",
    image: "../../images/taskManager.png",
    link: "https://task-manager-delta-ivory.vercel.app/",
    type: "live",
    description:
      "A simple React-based productivity tool for managing daily tasks. Features include persistent storage using localStorage, task filtering and sorting by priority and due dates, and full CRUD functionality. Built as a personal project to strengthen core React and state management skills.",
  },
  {
    name: "Unity Puzzle Game Prototype",
    year: "Date: 2024 - Present",
    align: "left",
    image: "../../images/game.png",
    link: "https://play.unity.com/en/user/3bca4cf5-9dd4-4953-b765-311e3df87429",
    type: "live",
    description:
      "A basic Unity-based puzzle game built to explore AR/VR development fundamentals and game loop logic.",
  },
  {
    name: "Comparative Study: VR Powerwall Software Platforms",
    year: "Date: 2024",
    align: "right",
    image: "../../images/powerwall.PNG",
    type: "university",
    description:
      "Researched and prototyped basic demos in NASA OpenSpace, CMC ViewR, Unity, and Unreal to assess performance and VR suitability for large-scale Powerwall displays. Delivered a comparative technical report outlining findings and platform recommendations.",
  },
  {
    name: "Custom GitHub-Style Tagging System",
    year: "Role: Web Developer (2024-2025)",
    align: "left",
    image: "../../images/tags.jpg",
    type: "company",
    description:
      "Built an efficient tagging and search interface to enhance user interaction. Improved content discovery and backend logic using TypeScript and a custom framework.",
  },
  {
    name: "Anti-Cheating Module for Online Assessment System",
    year: "Role: Product Development Engineer (2020-2021)",
    align: "right",
    image: "../../images/cheat.jpg",
    type: "company",
    description:
      "Designed and implemented an anti-cheating module for an online test platform. Features included detection of tab switching, full-screen enforcement, and custom warning mechanisms using JavaScript and browser APIs.",
  },
  {
    name: "Time Tracking for Online Examinations",
    year: "Role: Product Development Engineer (2020-2021)",
    align: "left",
    image: "../../images/test.jpg",
    type: "company",
    description:
      "Developed a Java-based time calculation module integrated with interactive frontend components for a testing platform.",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              description={project.description}
              type={project.type}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
