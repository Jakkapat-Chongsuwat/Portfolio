"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {isTransitioning && (
            <div
              className="h-screen w-screen fixed top-0
              left-0 right-0 pointer-events-none z-40 flex"
            >
              <Stairs />
            </div>
          )}
          <motion.div
            className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
