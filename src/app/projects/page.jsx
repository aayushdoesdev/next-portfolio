"use client";

import { Button } from "@/components/ui/moving-border";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, ex odio magni rerum nihil.",
    img: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://google.com",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, ex odio magni rerum nihil.",
    img: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://google.com",
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium, ex odio magni rerum nihil.",
    img: "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://google.com",
  },
];

const page = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl text-center">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen flex items-center justify-center text-6xl text-center bg-[#171717]" />
            {items.map((item) => (
              <div
                className="h-screen w-screen flex items-center justify-center bg-[#171717] border border-[#171717]"
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1>{item.title}</h1>
                  {/* <div className="relative">
                  <image src={item.img} alt='' fill/>
                </div> */}
                  <p>{item.desc}</p>
                  <Link href={item.link}>
                    <button>Visit</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
          <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-[#171717]">
            <h1 className="text-8xl">Do you have a Project?</h1>
            <div className="relative">
              <Link
                href="/contact"
              >
                <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl font-semibold">Hire Me</Button>
              </Link>
            </div>
          </div>
    </motion.div>
  );
};

export default page;
