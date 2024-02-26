"use client"

import {motion} from "framer-motion"
const page = () => {
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0"}} transition={{duration:1.2, ease: "easeOut"}}>Projects</motion.div>
  )
}

export default page
