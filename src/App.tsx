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
		<div className="min-h-screen flex flex-col justify-between">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/experience" element={<ExperiencePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
