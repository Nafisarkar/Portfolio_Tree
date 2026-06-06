import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const skeletonTags = [0, 1, 2];

const ProjectCard = ({ projectData }) => {
	const isLoading = !projectData;

	const {
		category = "",
		title = "",
		description = "",
		techstacks = [],
		link = "#",
	} = projectData || {};

	if (isLoading) {
		return (
			<Card className="flex flex-col w-full">
				<CardHeader>
					<Skeleton className="mb-2 h-4 w-20" />
					<Skeleton className="h-7 w-48" />
				</CardHeader>
				<CardContent className="flex-1 pb-10">
					<Skeleton className="mb-4 h-4 w-full" />
					<Skeleton className="mb-4 h-4 w-5/6" />
					<Skeleton className="mb-4 h-4 w-4/6" />
					<div className="flex flex-wrap gap-2 mt-4">
						{skeletonTags.map((i) => (
							<Skeleton key={i} className="h-6 w-16" />
						))}
					</div>
				</CardContent>
				<CardFooter className="flex items-end justify-end mt-auto">
					<Skeleton className="h-10 w-32" />
				</CardFooter>
			</Card>
		);
	}

	return (
		<Card className="group flex flex-col w-full h-full transition-all duration-300 hover:shadow-[0_8px_0px_0px_var(--border)]">
			<CardHeader>
				{category && (
					<Badge
						variant="neutral"
						className="mb-1 w-fit text-[10px] uppercase tracking-wider"
					>
						{category}
					</Badge>
				)}
				<h3 className="text-lg font-heading leading-tight line-clamp-1">
					{title}
				</h3>
			</CardHeader>
			<CardContent className="flex-1">
				<p className="mb-5 text-xs leading-relaxed text-muted-foreground line-clamp-4">
					{description}
				</p>
				{techstacks?.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{techstacks.map((tech) => (
							<Badge key={tech} className="text-[10px]">
								{tech}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="flex items-center justify-between mt-auto">
				<a
					href={link.replace(/\/$/, "")}
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted-foreground hover:text-foreground transition-colors"
					aria-label="View on GitHub"
				>
					<FaGithub size={18} />
				</a>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<Button size="sm">
						Live Demo <FaArrowRight className="ml-1.5" size={12} />
					</Button>
				</a>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
