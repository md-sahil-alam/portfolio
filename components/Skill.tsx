"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[2px] bg-linear-to-b from-transparent via-black to-transparent overflow-hidden">
      {/* Pulse */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[40%] left-0 w-full h-[30vh] 
                   bg-linear-to-b from-transparent via-white to-transparent"
      />
    </div>
  );
}
