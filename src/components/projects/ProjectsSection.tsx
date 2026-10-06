import { motion } from "motion/react";
import projects from "../../data/projects";
import ProjectRow from "./ProjectRow";

const ProjectsSection = () => {
	return (
		<section>
			<div className="mx-4 mt-12 mb-3 pb-1">
				<h2 className="text-md lowercase text-gray-8">
					projects{" "}
					<span className="text-xs text-gray-4">{projects.length}</span>
				</h2>
			</div>
			<p className="mb-6 px-4 text-sm text-gray-5 lowercase">
				a curated archive of my ongoing and completed projects.
			</p>

			<div className="flex flex-col">
				{projects.map((project, i) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.4,
							ease: "easeOut",
							delay: Math.min(i, 6) * 0.04,
						}}
					>
						<ProjectRow projectData={project} />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
