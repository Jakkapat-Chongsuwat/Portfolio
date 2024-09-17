"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We build websites and web applications that are fast, secure, and responsive.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "We build mobile applications for both iOS and Android platforms.",
    href: "/mobile-development",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "We design beautiful and user-friendly interfaces for websites and mobile applications.",
    href: "/ui-ux-design",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "We optimize websites for search engines to improve their visibility and ranking.",
    href: "/seo",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col justify-center gap-6 group"
            >
              <div className="flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-outline
                text-transparent group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex items-center justify-center
                  transition-all duration-500 hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-3xl text-primary" />
                </Link>
              </div>
              {/* Title */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all
              duration-500"
              >
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-white/60">{service.description}</p>
              {/* Border */}
              <div className="border-b border-gray-300 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
