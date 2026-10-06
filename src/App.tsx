import { motion } from "motion/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/layout/Footer";
import { SITE_CONFIG } from "./constants";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
	useEffect(() => {
		document.title = SITE_CONFIG.title;
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="min-h-screen flex flex-col justify-between"
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/experience" element={<ExperiencePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</motion.div>
	);
};

export default App;
