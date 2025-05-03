import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <div className="text-white">
        <span className="font-bold"></span>
        <p>
          Hello! I'm <span className="text-orange">Zenith</span>. I am a{" "}
          <span className="font-bold">Computer Science Master's student</span>{" "}
          with a strong foundation in{" "}
          <span className="font-bold">web development</span>. Over the past few
          years, I have gained hands-on experience in developing scalable,
          high-performance web applications, primarily using modern frameworks
          such as <span className="font-bold">React, Next.js, and Node.js</span>
          .
        </p>
        <br />
        <p>
          I am passionate about <b>clean architecture</b>,{" "}
          <b>maintainable code</b>, and delivering<b> user-centric designs</b>.
          I have a particular interest in <b>AR/VR</b> technologies and am
          actively exploring their potential for building interactive, immersive
          experiences.
        </p>
        <br />
        <p>
          My expertise spans both <b>front-end</b> and <b>back-end</b>{" "}
          development, with a focus on <b>optimizing performance</b> and
          ensuring seamless integration of systems. I am eager to contribute my
          skills and grow as a <b>full-stack developer</b>.
        </p>
        <br />
        <p>
          Open to opportunities in <b>web development</b>,{" "}
          <b>software engineering</b>, or <b>full-stack roles</b>, I am always
          excited to tackle new challenges and collaborate on impactful
          projects.
        </p>
      </div>
      <button
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center
                        mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center
                        text-white hover:text-cyan
                        "
        onClick={() => {
          const contactSection = document.getElementById("projects");
          contactSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
