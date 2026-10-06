import { FaGithub } from "react-icons/fa";
import { FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { SOCIAL_LINKS } from "../../constants";

const iconMap = {
	FaGithub: FaGithub,
	FaLinkedin: FaLinkedin,
	FaDiscord: FaDiscord,
	FaEnvelope: FaEnvelope,
};

const HeroSection = () => {
	return (
		<section className="px-4">
			<h1 className="animate-fade-up text-2xl text-gray-8">Shaon An Nafi</h1>
			<p
				className="animate-fade-up mt-2 text-sm lowercase text-gray-5"
				style={{ animationDelay: "80ms" }}
			>
				software engineer
			</p>

			<ul
				className="animate-fade-up mt-4 flex flex-wrap items-center gap-x-4 gap-y-4 text-sm text-gray-5 lowercase"
				style={{ animationDelay: "160ms" }}
			>
				{SOCIAL_LINKS.map((social) => {
					const Icon = iconMap[social.icon];
					const isExternal = social.href.startsWith("http");
					return (
						<li key={social.name}>
							<a
								href={social.href}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer" : undefined}
								className="group -my-2 flex items-center gap-2 py-2 transition-colors hover:text-gray-9"
							>
								<span className="group-hover:animate-shake">
									<Icon className="h-4 w-4" />
								</span>
								{social.name}
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default HeroSection;
