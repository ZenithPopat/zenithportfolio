import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2+" text="Live Projects" />
      </div>
      <p className="text-center text-white">
        With over three years of hands-on experience, I've built a portfolio of
        dynamic applications, focusing on delivering user-friendly, scalable,
        and efficient solutions. While my live projects are focused on
        showcasing my skills (like my personal portfolio and travel blog), I
        have developed many more impactful applications for academic and
        professional purposes.
      </p>
      <ExperienceInfo number="10+" text="Technologies Mastered" />
    </div>
  );
};

export default ExperienceTopLeft;
