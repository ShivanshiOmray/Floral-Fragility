import React from "react";
import { motion } from "framer-motion";

const MenuOverlay = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "12vw", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed z-50 w-full h-full top-[0.1vw]  left-0 bg-[#FF8676] bg-opacity-50"
    >
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <a
          className="navtext relative px-1 text-lg font-light inline-block"
          href="#"
        >
          Shop
        </a>
        <a
          className="navtext relative px-1 text-lg font-light inline-block"
          href="#"
        >
          New
        </a>
        <a
          className="navtext relative px-1 text-lg font-light inline-block"
          href="#"
        >
          About
        </a>
        <a
          className="navtext relative px-1 text-lg font-light inline-block"
          href="#"
        >
          Stores
        </a>
        <a
          className="navtext relative px-1 text-lg font-light inline-block"
          href="#"
        >
          Search
        </a>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
