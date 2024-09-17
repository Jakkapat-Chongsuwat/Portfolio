"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project Title",
    description: "Project Description",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "backend",
    title: "Project Title",
    description: "Project Description",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/assets/work/thumb2.png",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project Title",
    description: "Project Description",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://example.com",
    github: "https://github.com",
  },
];

const Page = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project categories */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all
            duration-500 capitalize"
              >
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-md text-accent break-words">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center
                    group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center
                    group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] xl:h-[520px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="Project Image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* <WorkSliderBtns /> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
