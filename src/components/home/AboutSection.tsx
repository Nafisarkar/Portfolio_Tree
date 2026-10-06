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
			<motion.div {...fadeUp()} className="mx-4 mt-12 mb-3  pb-1">
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
				className="mt-6 mb-3 px-4 text-sm text-gray-8"
			>
				What I do
			</motion.h3>

			<motion.dl {...fadeUp(0.22)} className="px-4">
				{WHAT_I_DO.map((item, i) => {
					const isLast = i === WHAT_I_DO.length - 1;
					return (
						<div key={item.label} className="group relative pb-3 pl-5">
							<span
								aria-hidden="true"
								className={`absolute left-0 w-px bg-gray-3 ${
									isLast ? "top-0 h-[0.9em]" : "top-0 bottom-0"
								}`}
							/>
							<span
								aria-hidden="true"
								className="absolute left-0 top-[0.75em] h-px w-3 bg-gray-3"
							/>
							<dt className="text-sm text-gray-8 transition-colors group-hover:text-white">
								{item.label}
							</dt>
							<dd className="relative mt-1 pl-5 text-sm leading-relaxed text-gray-5">
								<span
									aria-hidden="true"
									className="absolute left-0 top-0 h-[0.75em] w-px bg-gray-3"
								/>
								<span
									aria-hidden="true"
									className="absolute left-0 top-[0.75em] h-px w-3 bg-gray-3"
								/>
								{item.description}
							</dd>
						</div>
					);
				})}
			</motion.dl>

			<motion.p
				{...fadeUp(0.28)}
				className="mt-6 px-4 text-sm leading-relaxed text-gray-5"
			>
				Beyond tech: photography, video games, reading, and traveling. Always
				looking for collaboration opportunities that make a positive impact.
			</motion.p>
		</section>
	);
};

export default AboutSection;
