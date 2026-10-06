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

const AboutSection = () => {
	return (
		<section className="lowercase">
			<div className="animate-fade-up mx-4 mt-12 mb-3 pb-1">
				<h2 className="text-md lowercase text-gray-8">about</h2>
			</div>

			<p
				className="animate-fade-up mt-4 px-4 text-sm leading-relaxed text-gray-5"
				style={{ animationDelay: "100ms" }}
			>
				My work touches the whole stack, from React, TanStack Start, and React
				Native to Node.js, Hono, Go, and Python backends. I'm picky about the
				details, from spacing and states to edge cases and error handling.
			</p>

			<h3
				className="animate-fade-up mt-6 mb-3 px-4 text-sm text-gray-8"
				style={{ animationDelay: "180ms" }}
			>
				What I do
			</h3>

			<dl className="animate-fade-up px-4" style={{ animationDelay: "220ms" }}>
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
			</dl>

			<p
				className="animate-fade-up mt-6 px-4 text-sm leading-relaxed text-gray-5"
				style={{ animationDelay: "280ms" }}
			>
				Beyond tech: photography, video games, reading, and traveling. Always
				looking for collaboration opportunities that make a positive impact.
			</p>
		</section>
	);
};

export default AboutSection;
