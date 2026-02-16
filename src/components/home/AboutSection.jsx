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
          I’m a computer science student who genuinely just loves computers and
          programming a little too much. I spend most of my time creating apps,
          websites, and random silly little projects that absolutely nobody
          asked for but I built them anyway. Sometimes they’re useful, sometimes
          they’re just experiments that exist purely because I was curious at
          2AM.
        </motion.p>
        <motion.p variants={paragraphItemVariants} className="text-justify">
          Most of my projects probably won’t change the world, but they
          definitely changed my understanding (and occasionally my sleep
          schedule). At the end of the day, I just love building stuff.
        </motion.p>
        <motion.p variants={paragraphItemVariants} className="text-justify">
          Beyond tech, I enjoy photography in my free time, playing video games
          [
          <a
            className="underline"
            href="https://www.warframe.com/"
            target="_blank"
          >
            Warframe
          </a>
          ], reading books [
          <a
            className="underline"
            href="https://www.rokomari.com/book/457591/osochorachor-2"
            target="_blank"
          >
            অসচরাচর ২
          </a>
          ], and occasionally traveling to experience different cultures and
          perspectives. I'm always looking for opportunities to collaborate on
          projects that can make a positive impact.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
