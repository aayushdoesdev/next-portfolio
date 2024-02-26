"use client";

import { motion } from "framer-motion";

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
            <h1>Biography</h1>
            <p></p>
          </div>
          <div className="">Skills</div>
          <div className="">Experiance</div>
        </div>
        <div className="hidden">{/* svg */}</div>
      </div>
    </motion.div>
  );
};

export default page;
