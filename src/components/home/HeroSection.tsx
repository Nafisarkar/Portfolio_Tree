import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { SOCIAL_LINKS } from "../../constants";

const iconMap = {
	FaGithub: FaGithub,
	FaLinkedin: FaLinkedin,
	FaDiscord: FaDiscord,
	FaEnvelope: FaEnvelope,
};

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, ease: "easeOut", delay },
});

const HeroSection = () => {
	return (
		<section className="px-4">
			<motion.h1 {...fadeUp()} className="text-2xl text-gray-8">
				Shaon An Nafi
			</motion.h1>
			<motion.p
				{...fadeUp(0.08)}
				className="mt-2 text-sm lowercase text-gray-5"
			>
				software engineer
			</motion.p>

			<motion.ul
				{...fadeUp(0.16)}
				className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-5 lowercase"
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
								className="group flex items-center gap-2 transition-colors hover:text-gray-9"
							>
								{social.name}
								<span className="group-hover:animate-shake">
									<Icon className="h-4 w-4" />
								</span>
							</a>
						</li>
					);
				})}
			</motion.ul>
		</section>
	);
};

export default HeroSection;
