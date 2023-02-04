import React from "react";
import calenderIcon from "../assets/calendar.png";
const Experience = () => {
  const experienceData = [
    {
      date: "11/7/22-1/12/2022",
      company: "Escale Solutions",
      position: "SDE Intern",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-20"
    >
      <div className="flex flex-col max-w-screen-lg  mx-auto">
        <div className="p-4 ">
          <div className="pb-8">
            <p className=" text-white text-4xl font-bold border-b-4 border-gray-500 inline">
              Experience
            </p>
          </div>
        </div>
        <div className="stepper">
          {experienceData.map((item) => (
            <div className="text-white pb-12">
              <div className="flex justify-start items-center pl-5">
                <img src={calenderIcon} alt="" className="w-[14px] invert" />
                <p className="pl-3 text-gray-200 text-sm">{item.date}</p>
              </div>
              <h4 className="uppercase pl-5">{`${item.position}-${item.company}`}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
