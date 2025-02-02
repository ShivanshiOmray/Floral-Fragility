import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import MenuOverlay from "./MenuOverlay";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full top-0 flex items-center justify-between px-7 py-8 md:px-12">
      <h2 className="lg:text-2xl text-xl">F</h2>
      <div className="flex font-[ogg] gap-60 items-center">
        <div className="hidden lg:flex items-center justify-center gap-12">
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
        <div className="flex gap-7 text-lg">
          <i className="ri-shopping-bag-3-line"></i>
          <div>
            {!navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)}>
                <i className="ri-menu-3-line lg:hidden"></i>
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)}>
                <i className="ri-close-fill lg:hidden text-2xl"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>{navbarOpen && <MenuOverlay />}</AnimatePresence>
    </div>
  );
};

export default Navbar;
