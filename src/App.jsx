import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import ExperiencePage from "./pages/ExperiencePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/layout/Footer";
import { useTheme } from "./hooks/useTheme";
import { SITE_CONFIG } from "./constants";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = SITE_CONFIG.title;
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
