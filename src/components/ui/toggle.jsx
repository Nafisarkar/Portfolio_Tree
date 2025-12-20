import React from "react";
import { motion } from "motion/react";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className="relative flex items-center justify-start h-12 w-12 overflow-hidden rounded-full cursor-pointer"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Light Mode Icon */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={darkMode ? { opacity: 1, rotate: 180 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute flex items-center justify-start"
      >
        <MdOutlineLightMode className="text-primary" size={24} />
      </motion.div>

      {/* Dark Mode Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={darkMode ? { opacity: 0 } : { opacity: 1, rotate: -380 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute flex items-center justify-start"
      >
        <FaRegMoon className="text-primary" size={24} />
      </motion.div>
    </div>
  );
};

export default Toggle;
