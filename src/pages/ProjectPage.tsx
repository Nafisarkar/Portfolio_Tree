import { motion } from "motion/react";
import { useSelector } from "react-redux";
import ProjectCard from "../components/projects/ProjectCard";
import { containerVariants, itemVariants } from "../constants/animations";

const ProjectPage = () => {
	const { items: projects, error } = useSelector((state) => state.projects);

	return (
		<main className="max-w-5xl mx-auto px-6 py-12 min-h-[calc(100vh-200px)]">
			<div className="flex items-center gap-3 mb-8">
				<span className="block w-8 h-0.5 bg-main" />
				<h1 className="font-heading text-2xl">Projects</h1>
				<span className="text-xs text-muted-foreground font-base">
					{projects.length}
				</span>
			</div>

			{error && (
				<div
					className="bg-red-500/10 border-l-4 border-red-500 text-red-500 p-4 mb-6"
					role="alert"
				>
					<p>Failed to load projects: {error}</p>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{projects.length > 0 ? (
					<motion.div
						className="contents"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{projects.map((project) => (
							<motion.div key={project.id} variants={itemVariants}>
								<ProjectCard projectData={project} />
							</motion.div>
						))}
					</motion.div>
				) : (
					<div className="md:col-span-2 lg:col-span-3 text-center py-10 flex items-center justify-center">
						<p className="text-muted-foreground">No projects found.</p>
					</div>
				)}
			</div>
		</main>
	);
};

export default ProjectPage;
