"use client";

import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* CONTAINER */}
      <div className="">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* text container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="flex flex-col gap-12 justify-center text-2xl font-bold">Biography</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi. Nobis minima ducimus, perferendis omnis odio enim similique molestias ipsam sit autem unde ea?</p>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            <div className="font-bold text-2xl">Skills</div>
              <div className="text-6xl gap-4 flex flex-wrap">
              <IoLogoJavascript />
              <FaHtml5 />
              <FaCss3Alt />
              <FaReact />
              <SiTailwindcss />
              <TbBrandNextjs />
              <DiMongodb />
              <FaGithub />
              </div>
          </div>
          <div className="">Experiance</div>
        </div>
        <div className="hidden">{/* svg */}</div>
      </div>
    </motion.div>
  );
};

export default page;
