import React from "react";
import { motion } from "motion/react";
import {
  aboutMeContainerVariants,
  paragraphItemVariants,
} from "../../constants/animations";

const AboutSection = () => {
  return (
    <div className="w-full mb-2">
      <motion.h2
        initial={{ opacity: 0, y: +10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold text-xl md:text-xl mb-2"
      >
        About Me
      </motion.h2>
      <motion.div
        className="space-y-4 font-PublicSans text-gray-500 "
        variants={aboutMeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={paragraphItemVariants} className="text-justify">
          I'm a computer science student passionate about creating seamless,
          user-friendly experiences through thoughtful design and efficient
          code. I love working at the intersection of frontend and backend
          development, ensuring that applications are not only aesthetically
          pleasing but also robust and scalable.
        </motion.p>
        <motion.p variants={paragraphItemVariants} className="text-justify">
          Currently, I'm focused on expanding my skills in web development, with
          particular interest in React and Node.js. Through my coursework and
          personal projects, I've gained experience in UI/UX design principles,
          responsive layouts, and modern JavaScript frameworks. I enjoy tackling
          complex problems and finding elegant solutions that prioritize user
          experience while maintaining code quality.
        </motion.p>
        <motion.p variants={paragraphItemVariants} className="text-justify">
          When I'm not coding, you'll find me exploring new technologies, or
          expanding my knowledge through online courses. Beyond tech, I enjoy
          photography in my free time, playing video games, reading books, and
          occasionally traveling to experience different cultures and
          perspectives. I'm always looking for opportunities to collaborate on
          projects that can make a positive impact.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
