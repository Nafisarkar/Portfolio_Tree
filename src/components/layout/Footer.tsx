import { useState } from "react";
import { FaCodeBranch } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { useGitHub } from "../../hooks/useGitHub";

const Footer = () => {
	const [year] = useState(new Date().getFullYear());
	const { repoDetails } = useGitHub();

	return (
		<footer className="w-full">
			<div className="max-w-screen-md mx-auto px-4 pb-8">
				<div className="mt-12 flex flex-wrap justify-between gap-2 px-4 text-sm text-gray-5 sm:flex-nowrap">
					<p className="lowercase">&copy; {year} shaon an nafi</p>

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
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
