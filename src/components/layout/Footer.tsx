import { useState } from "react";
import { FaCodeBranch } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import { useGitHub } from "../../hooks/useGitHub";

const Footer = () => {
	const [year] = useState(new Date().getFullYear());
	const { repoDetails, error } = useGitHub();

	return (
		<footer className="w-full mt-auto">
			<div className="max-w-5xl mx-auto px-6 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<div className="font-RobotoMono text-xs mt-1">
							&copy; {year} Shaon An Nafi
						</div>
					</div>

					<div className="flex flex-row items-center gap-6">
						<div
							data-tooltip-id="stars"
							data-tooltip-content="GitHub repository count"
							className="flex items-center gap-2"
						>
							<FaCodeBranch className="h-4 w-4 text-muted-foreground" />
							<p className="text-xs font-medium">{repoDetails.repocount}</p>
						</div>
						<Tooltip id="stars" />
						<div
							data-tooltip-id="forks"
							data-tooltip-content="GitHub followers count"
							className="flex items-center gap-2"
						>
							<PiGithubLogoFill className="h-4 w-4 text-muted-foreground" />
							<p className="text-xs font-medium">{repoDetails.gitfollowers}</p>
						</div>
						<Tooltip id="forks" />
					</div>
				</div>
				{error && (
					<div className="text-center text-[10px] text-destructive mt-4">
						{error}
					</div>
				)}
			</div>
		</footer>
	);
};

export default Footer;
