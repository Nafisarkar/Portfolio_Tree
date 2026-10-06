import { FaChevronDown } from "react-icons/fa6";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import { useSectionSnap } from "../hooks/useSectionSnap";

const HomePage = () => {
	useSectionSnap();

	return (
		<main className="w-full max-w-screen-md mx-auto px-4">
			<section
				data-snap-section
				className="relative flex min-h-[100dvh] flex-col py-10"
			>
				{/* my-auto centres without clipping when the content is taller
				    than the viewport, which justify-center would do. */}
				<div className="my-auto">
					<HeroSection />
					<AboutSection />
				</div>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute bottom-5 left-0 right-0 flex justify-center"
				>
					<div
						className="animate-fade-up text-gray-4"
						style={{ animationDelay: "700ms" }}
					>
						<FaChevronDown className="animate-scroll-hint h-3 w-3" />
					</div>
				</div>
			</section>

			<section data-snap-section className="pt-14">
				<ProjectsSection />
			</section>
		</main>
	);
};

export default HomePage;
