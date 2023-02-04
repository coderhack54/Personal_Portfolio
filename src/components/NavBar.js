import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "skills",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center h-20 text-white bg-black w-full px-4 fixed">
      <div>
        <h1 className="font-signature text-5xl ml-2">Anmol</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-gray-500 capitalize hover:scale-105 cursor-pointer font-medium duration-200"
          >
            <Link to={link} duration={500} smooth>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="text-gray-500 cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800 h-screen justify-center items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-4xl capitalize cursor-pointer px-4 py-6"
            >
              <Link to={link} duration={500} smooth onClick={()=>setNav(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar