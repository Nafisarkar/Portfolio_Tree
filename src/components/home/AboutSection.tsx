import { motion } from "motion/react";

const WHAT_I_DO = [
	{
		label: "Full-Stack Web Development",
		description: "end-to-end features from database schema to polished UI.",
	},
	{
		label: "API Design",
		description: "scalable REST APIs with Node.js, Bun, Hono and Express.",
	},
];

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, ease: "easeOut", delay },
});

const AboutSection = () => {
	return (
		<section className="lowercase">
			<motion.div
				{...fadeUp()}
				className="mx-4 mt-12 mb-3 border-b border-gray-2 pb-1"
			>
				<h2 className="text-md lowercase text-gray-8">about</h2>
			</motion.div>

			<motion.p
				{...fadeUp(0.1)}
				className="mt-4 px-4 text-sm leading-relaxed text-gray-5"
			>
				My work touches the whole stack, from React, TanStack Start, and React
				Native to Node.js, Hono, Go, and Python backends. I'm picky about the
				details, from spacing and states to edge cases and error handling.
			</motion.p>

			<motion.h3
				{...fadeUp(0.18)}
				className="mt-8 mb-4 px-4 text-sm text-gray-8"
			>
				What I do
			</motion.h3>

			<motion.dl {...fadeUp(0.22)} className="space-y-5 px-4">
				{WHAT_I_DO.map((item) => (
					<div key={item.label}>
						<dt className="text-sm text-gray-8">{item.label}</dt>
						<dd className="mt-1 text-sm leading-relaxed text-gray-5">
							{item.description}
						</dd>
					</div>
				))}
			</motion.dl>

			<motion.p
				{...fadeUp(0.28)}
				className="mt-8 px-4 text-sm leading-relaxed text-gray-5"
			>
				Beyond tech: photography, video games, reading, and traveling. Always
				looking for collaboration opportunities that make a positive impact.
			</motion.p>
		</section>
	);
};

export default AboutSection;
