import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";

const HomePage = () => {
	return (
		<main className="w-full max-w-screen-md mx-auto px-4 py-10">
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
		</main>
	);
};

export default HomePage;
