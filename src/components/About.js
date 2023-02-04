import React from "react";
import Experience from "./Experience";

const About = () => {
  return (
    <div
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      name="about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl border-b-4 inline border-gray-500">About</p>
        </div>
        <p className="text-xl md:mt-20">
          Hi, I'm a Anmol. I love to create modern User Interfaces with amazing
          design and responsiveness that gives seamless User Experience . I am
          Ambitious, Energetic and Passionate for the work I do. I embrace
          opportunities for growth by continuously learning new technologies and
          skills.
        </p>
        <br />
        <p className="text-xl">
          I have the ability to adapt in both self-starting and collaborative
          enviroment while staying focus on achieving high quality results under
          strict deadlines.I am seeking a challenging position in a reputable
          company which utilizes my skills while allowing me the opportunity to
          grow professionally.
        </p>
      </div>
    </div>
  );
};

export default About;
