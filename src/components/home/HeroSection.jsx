import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong, FaLinkedin, FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiDreamstime, SiExpress } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import profileImage from "../../assets/pf.svg";
import { SOCIAL_LINKS, CONTACT_LINKS } from "../../constants";
import {
  profileImageVariants,
  paragraphItemVariants,
  buttonsContainerVariants,
  buttonItemVariants,
  iconsContainerVariants,
  iconItemVariants,
} from "../../constants/animations";

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaDiscord: FaDiscord,
  PiInstagramLogoFill: PiInstagramLogoFill,
  SiDreamstime: SiDreamstime,
};

const HeroSection = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
      {/* Profile Image */}
      <motion.div
        className="relative flex justify-center md:order-2"
        variants={profileImageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <div className="overflow-hidden rounded-full w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10">
            <img
              src={profileImage}
              alt="Profile"
              className="h-full w-full bg-main-foreground rounded-full object-cover transform transition-all duration-500 ease-in-out scale-155"
            />
          </div>
          <div className="absolute top-1 left-16 animate-float-fast z-20 text-main ">
            <SiExpress size={28} />
          </div>
          <div className="absolute bottom-4 left-4 animate-float-slow  z-20">
            <TbBrandReact size={28} />
          </div>
          <div className="absolute bottom-8 right-2 animate-float z-20">
            <RiTailwindCssFill size={28} />
          </div>
        </div>
      </motion.div>

      {/* Personal Info */}
      <div className="flex flex-col items-center md:items-start md:order-1 space-y-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h1
            variants={paragraphItemVariants}
            className="font-bold text-3xl sm:text-4xl text-center md:text-left"
          >
            Shaon An Nafi
          </motion.h1>
          <motion.h2
            variants={paragraphItemVariants}
            className="font-bold text-lg sm:text-xl text-center md:text-left mt-4"
          >
            Software Engineer
          </motion.h2>
          <motion.p
            variants={paragraphItemVariants}
            className="text-center md:text-left font-PublicSans max-w-md mt-4"
          >
            I am passionate about integrating functionality and design in
            applications to create intuitive, user-friendly experiences.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 w-full max-w-sm "
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonItemVariants} className="w-full">
            <Button
              onClick={() => window.open(CONTACT_LINKS.discord, "_blank")}
              className="w-full"
            >
              Contact Me <FaArrowRightLong className="ml-2" />
            </Button>
          </motion.div>
          <motion.div variants={buttonItemVariants} className="w-full">
            <Button
              onClick={() => window.open(CONTACT_LINKS.calendly, "_blank")}
              className="w-full"
            >
              Schedule a Meeting <FaArrowRightLong className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-row gap-6 mt-3"
          variants={iconsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <Icon className="h-6 w-6 transition-colors" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
