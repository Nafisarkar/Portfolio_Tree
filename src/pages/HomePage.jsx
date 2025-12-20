import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";

const HomePage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default HomePage;
