"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-[#171717] text-white">
        <motion.div
          className="h-screen w-screen fixed bg-gray-800 rounded-b-[100px] z-50"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-70 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >{pathName}</motion.div> */}
        <motion.div
          className="h-screen w-screen fixed bg-gray-800 rounded-t-[100px] bottom-0 z-20"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay:0.5 } }}
        />
        <Navbar />
        {children}
      </div>
    </AnimatePresence>
  );
};
