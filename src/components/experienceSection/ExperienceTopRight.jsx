import React from "react";

const ExperienceTopRight = () => {
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <h2 className="text-lg font-bold text-white text-center mb-4">
        Experience & Key Achievements
      </h2>
      <div className="text-lg text-center text-lightGrey">
        <ul className="list-disc list-inside text-lightGrey">
          <li className="mb-2">
            <span className="font-bold text-white">3+ Years</span> building
            full-stack web apps using React, Next.js, and Node.js.
          </li>
          <li className="mb-2">
            <span className="font-bold text-white">Live Projects:</span>{" "}
            Developed personal Portfolio and Travel blog platforms, implementing
            real-time updates and secure authentication.
          </li>
          <li className="mb-2">
            <span className="font-bold text-white">Performance-Driven:</span>{" "}
            Boosted app efficiency by 15% through optimized TypeScript and
            custom frameworks.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTopRight;
