import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { SITE_CONFIG } from "./constants";
import { useTheme } from "./hooks/useTheme";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
	useTheme();

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
