"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Navlink from "./Navlink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl md:text-3xl font-semibold font-sacramento">
          <Link href="/">Aayush</Link>
        </div>
        <div className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <Navlink link={link} key={i}/>
          ))}
        </div>
      </div>
      <div className="relative ">
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-3xl md:hidden"
        >
          <CiMenuBurger />
        </button>
      </div>
      {openSidebar && (
      <div className="relative z-20">
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-3xl md:hidden"
        >
          <IoIosClose />
        </button>
      </div>
      )}
      {/* MENU LIST */}
      {openSidebar ? (
        <div className="absolute top-0 left-0 h-screen w-screen bg-neutral-800 flex flex-col items-center justify-center space-y-12 text-3xl z-10">
          {links.map((link, i) => (
            <Link href={link.url} key={i}>
              {link.title}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
