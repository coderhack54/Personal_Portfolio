import React from "react";
import "../styles.css";

import travelWebsite from "../assets/portfolio/travelWebsite.png";
import gymWebsite from "../assets/portfolio/gymWebsite.png";
import weatherApp from "../assets/portfolio/weatherAppPhoto.png";
import amazonClone from "../assets/portfolio/amazonClone.png";
import netflixClone from "../assets/portfolio/netflixClonePhoto.png";
import blogWebsite from "../assets/portfolio/brainwaveWebsite.png";
import docsCloneWebsite from "../assets/portfolio/googledocsClone.png";



const Portfolio = () => {
  const handleClick = (link) => {
    window.open(link);
  };
  const portfolios = [
    {
      id: 1,
      src: travelWebsite,
      demo: "https://indiaunlimited.de/",
    },
    {
      id: 2,
      src: blogWebsite,
      demo: "https://brainwave-blog.vercel.app/",
      code:"https://github.com/coderhack54/brainwave_blog"

    },
    {
      id: 3,
      src: gymWebsite,
      demo: "https://workout-app-4qfe.onrender.com/",
      code: "https://github.com/coderhack54/Workout-App",
    },
    {
      id: 4,
      src: weatherApp,
      demo: "https://weather-app-6wmh.onrender.com/",
      code: "https://github.com/coderhack54/Weather_app",
    },
    {
      id: 5,
      src: amazonClone,
      demo: "https://amazon-clone-jefe.onrender.com/",
      code: "https://github.com/coderhack54/amazon-clone/tree/master",
    },
    {
      id: 6,
      src: netflixClone,
      demo: "https://netflix-clone-odhi.onrender.com/",
      code: "https://github.com/coderhack54/NetflixClone",
    },
    {
      id: 7,
      src: docsCloneWebsite,
      demo: "https://google-docs-clone-neon.vercel.app/",
      code: "https://github.com/coderhack54/google-docs-clone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200"
                  onClick={() => handleClick(demo)}
                  id="demobtn"
                >
                  Demo
                </button>

                <button
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200"
                  onClick={() => handleClick(code)}
                  id="codebtn"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
