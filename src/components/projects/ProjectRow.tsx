import { FaGithub } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import { getTechIcon } from "../../constants/techIcons";

const ProjectRow = ({ projectData }) => {
	const isLoading = !projectData;

	const {
		category = "",
		title = "",
		description = "",
		techstacks = [],
		link = "#",
	} = projectData || {};

	const techsWithIcons = techstacks
		.filter((tech) => getTechIcon(tech))
		.slice(0, 4);

	if (isLoading) {
		return (
			<div className="mx-4 flex items-start justify-between gap-4 py-4">
				<div className="min-w-0 flex-1">
					<Skeleton className="h-4 w-40" />
					<Skeleton className="mt-4 h-3 w-full" />
					<Skeleton className="mt-2 h-3 w-2/3" />
				</div>
				<div className="flex shrink-0 items-start gap-3">
					<Skeleton className="h-4 w-16" />
					<Skeleton className="h-4 w-4" />
				</div>
			</div>
		);
	}

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="group mx-4 flex items-start justify-between gap-4 py-4 transition-colors hover:bg-gray-1"
		>
			<div className="min-w-0">
				<h3 className="text-md lowercase text-gray-8 group-hover:underline group-hover:underline-offset-4">
					{title}
				</h3>
				<p className="mt-2 max-w-prose text-sm text-gray-5">{description}</p>
				{techsWithIcons.length > 0 && (
					<p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
						<span className="text-gray-4 lowercase">built with</span>
						{techsWithIcons.map((tech) => {
							const Icon = getTechIcon(tech);
							return (
								<span
									key={tech}
									className="flex items-center gap-1 text-gray-6"
								>
									{Icon ? <Icon className="h-3.5 w-3.5" /> : null}
									{tech}
								</span>
							);
						})}
					</p>
				)}
			</div>
			<div className="flex shrink-0 items-start gap-3">
				{category && (
					<span className="hidden font-hand text-base leading-none text-gray-5 xs:block [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-300 ease-out group-hover:[clip-path:inset(0_0_0_0)] pointer-coarse:[clip-path:inset(0)]">
						{category}
					</span>
				)}
				<FaGithub className="h-4 w-4 text-gray-5 transition-colors group-hover:text-white" />
			</div>
		</a>
	);
};

export default ProjectRow;
