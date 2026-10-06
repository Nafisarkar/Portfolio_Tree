import { useState } from "react";
import { FaCode, FaCodeBranch } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { useGitHub } from "../../hooks/useGitHub";

const formatDuration = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const Footer = () => {
	const [year] = useState(new Date().getFullYear());
	const { repoDetails } = useGitHub();

	return (
		<footer className="w-full">
			<div className="max-w-screen-md mx-auto px-4 pb-3">
				<div className="mt-4 flex flex-wrap justify-between gap-2 px-4 text-sm text-gray-5 sm:flex-nowrap">
					<p className="lowercase">
						&copy; {year}
						<span className="text-gray-4"> · {__COMMIT_HASH__}</span>
					</p>

					<div className="flex flex-wrap items-center gap-x-4 gap-y-1">
						<span
							title="public repositories"
							className="flex items-center gap-2"
						>
							<FaCodeBranch className="h-3.5 w-3.5 text-gray-4" />
							{repoDetails.repocount}
						</span>
						<span title="github followers" className="flex items-center gap-2">
							<PiGithubLogoFill className="h-3.5 w-3.5 text-gray-4" />
							{repoDetails.gitfollowers}
						</span>
						{__WAKATIME__ && (
							<span
								title={`coded ${formatDuration(__WAKATIME__.totalSeconds)} in the last 7 days${
									__WAKATIME__.topLanguage
										? ` · mostly ${__WAKATIME__.topLanguage}`
										: ""
								}`}
								className="flex items-center gap-2"
							>
								<FaCode className="h-3.5 w-3.5 text-gray-4" />
								{formatDuration(__WAKATIME__.totalSeconds)}
							</span>
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
