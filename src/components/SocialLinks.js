import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/coderhack54",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/AnmolSrivastava__resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {links.map(({ id, child, style, download, href }) => (
          <li
            key={id}
            className={
              "bg-gray-500 w-40 h-14 flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between text-white w-full items-center"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
