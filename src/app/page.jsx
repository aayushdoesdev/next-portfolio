"use client"

import Image from "next/image";
import {motion} from "framer-motion"

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0"}} transition={{duration:1.2, ease: "easeOut"}}>
    <div className="h-[100vh] bg-[#171717] overflow-hidden flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="image" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold">Hello! I'm Aayush, a developer based in India.</h1>
        <p className="md:text-xl">
          I love creating web applications that are user friendly, simple &
          beautiful.I am a self taught full stack web developer and i have spent
          8 months learning the fundamentals of front-end & back-end. I have
          worked on some projects which are practical and has real life
          implimentations.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black">My Projects</button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-black">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
