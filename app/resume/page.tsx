"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim maxime temporibus iste quaerat nostrum.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jakkapat Chongsuwat",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66) 84 473 4136",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Line",
      fieldValue: "superstream",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "jakkapat-chongsuwat",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thai",
    },
    {
      fieldName: "Email",
      fieldValue: "jakkapat.chongsuwat@gmail.com",
    },
    {
      fieldName: "Full-time",
      fieldValue: "Not Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Thai",
    },
  ],
};

// experience data
const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim maxime temporibus iste quaerat nostrum.",
  items: [
    {
      company: "Company Name",
      position: "Position",
      duration: "2019 - Present",
    },
    {
      company: "Company Name",
      position: "Position",
      duration: "2019 - Present",
    },
    {
      company: "Company Name",
      position: "Position",
      duration: "2019 - Present",
    },
  ],
};

const education = {
  icons: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim maxime temporibus iste quaerat nostrum.",
  items: [
    {
      insititution: "Company Name",
      degree: "Position",
      duration: "2019 - Present",
    },
    {
      insititution: "Company Name",
      degree: "Position",
      duration: "2019 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim maxime temporibus iste quaerat nostrum.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Contents */}
            <TabsContent value="experience" className="w-full">
              {/* Render experience content here */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              {/* Render education content here */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.insititution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              {/* Render skills content here */}
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col gap-4 justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-xs capitalize">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              {/* Render about me content here */}
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 xl:gap-x-11 xl:max-w-[1200px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start xl:justify-start gap-4"
                      >
                        <span className="text-sm text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-sm break-words break-word">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Page;
