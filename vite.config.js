import { execSync } from "node:child_process";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Short SHA of the commit being built, injected at build time.
const commitHash = (() => {
	try {
		const sha =
			process.env.VERCEL_GIT_COMMIT_SHA ||
			execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] })
				.toString()
				.trim();
		return sha.slice(0, 7);
	} catch {
		return "dev";
	}
})();

export default defineConfig({
	plugins: [tailwindcss(), react()],
	define: {
		__COMMIT_HASH__: JSON.stringify(commitHash),
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return;
					if (id.includes("react-icons")) return "icons";
					if (id.includes("react-dom") || id.includes("/react/"))
						return "react";
					if (id.includes("react-router") || id.includes("scheduler"))
						return "react";
					if (id.includes("/motion")) return "motion";
					if (id.includes("lenis")) return "lenis";
					return "vendor";
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
