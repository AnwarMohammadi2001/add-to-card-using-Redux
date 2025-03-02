import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center h-12 bg-gray-100 text-black shadow-sm font-mono px-5">
        <div className="pl-5">Logo</div>
        <button onClick={toggleMenu} className="pr-5 lg:hidden">
          <CgMenuRightAlt size={34} />
        </button>
      </div>

      {/* Animated Sidebar */}
      {isOpen && (
        <motion.div
          initial={{
            width: 0,
            height: 0,
            borderRadius: "50%",
            top: 0,
            right: 0,
            opacity: 0,
          }}
          animate={{
            width: "70vw",
            height: "100vh",
            borderRadius: "0%",
            top: 0,
            right: 0,
            opacity: 1,
            position: "fixed",
          }}
          exit={{ width: 0, height: 0, borderRadius: "50%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 bg-gray-600 shadow-lg lg:hidden flex flex-col items-center justify-center p-5"
        >
          <button onClick={toggleMenu} className="mb-4 text-lg font-bold">
            Close
          </button>
          <ul className="space-y-4 text-center">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
