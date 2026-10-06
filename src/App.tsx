import { motion } from "motion/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
	ParticleScroll,
	type ParticleScrollOptions,
	supportsHtmlInCanvas,
} from "./components/canvasui/ParticleScroll";
import Footer from "./components/layout/Footer";
import { SITE_CONFIG } from "./constants";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const PARTICLE_OPTIONS: ParticleScrollOptions = {
	point: 0.68,
	band: 420,
	density: 2,
	size: 1.25,
	spread: 220,
	gravity: 0.35,
	drift: 0.7,
	swirl: 60,
	stagger: 0.7,
	fade: 0.85,
	settle: 1.2,
	smoothing: 0.6,
};

const App = () => {
	useEffect(() => {
		document.title = SITE_CONFIG.title;
	}, []);

	const content = (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/experience" element={<ExperiencePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);

	// The particle effect captures the DOM into a canvas and drives its own
	// scroll container, so it only takes over where the API is available.
	if (supportsHtmlInCanvas()) {
		return (
			<ParticleScroll className="h-[100dvh] w-full" {...PARTICLE_OPTIONS}>
				<div className="min-h-full flex flex-col justify-between">
					{content}
				</div>
			</ParticleScroll>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="min-h-screen flex flex-col justify-between"
		>
			{content}
		</motion.div>
	);
};

export default App;
