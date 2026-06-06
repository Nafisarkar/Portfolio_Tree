import { motion } from "motion/react";
import {
	aboutMeContainerVariants,
	paragraphItemVariants,
} from "../../constants/animations";

const AboutSection = () => {
	return (
		<section className="w-full border-t-2 border-border pt-10">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.15 } },
				}}
			>
				<motion.div
					variants={paragraphItemVariants}
					className="flex items-center gap-3 mb-6"
				>
					<span className="block w-8 h-0.5 bg-main" />
					<h2 className="font-heading text-lg tracking-wide">About</h2>
				</motion.div>

				<motion.div
					className="space-y-4 max-w-2xl"
					variants={aboutMeContainerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.p
						variants={paragraphItemVariants}
						className="text-sm leading-relaxed text-muted-foreground"
					>
						A computer science student who genuinely just loves computers and
						programming. Building apps, websites, and experimental projects that
						nobody asked for — sometimes useful, sometimes just 2AM curiosity.
					</motion.p>
					<motion.p
						variants={paragraphItemVariants}
						className="text-sm leading-relaxed text-muted-foreground"
					>
						Most projects won't change the world, but they change my
						understanding (and occasionally my sleep schedule). At the end of
						the day, I just love building stuff.
					</motion.p>
					<motion.p
						variants={paragraphItemVariants}
						className="text-sm leading-relaxed text-muted-foreground"
					>
						Beyond tech: photography, video games, reading, and traveling.
						Always looking for collaboration opportunities that make a positive
						impact.
					</motion.p>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default AboutSection;
