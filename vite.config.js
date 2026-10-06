import { execSync } from "node:child_process";
import { request } from "node:https";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

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

/**
 * WakaTime stats are resolved at build time so the API key never reaches the
 * browser. A missing key or a failed request simply omits the stat.
 * IPv4 is forced because some build environments resolve an unreachable AAAA.
 */
function fetchWakaTime(apiKey) {
	if (!apiKey) return Promise.resolve(null);
	return new Promise((resolve) => {
		const req = request(
			{
				host: "wakatime.com",
				path: "/api/v1/users/current/stats/last_7_days",
				family: 4,
				headers: {
					Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
				},
			},
			(res) => {
				if (res.statusCode !== 200) {
					console.warn(`[wakatime] request failed with ${res.statusCode}`);
					res.resume();
					resolve(null);
					return;
				}
				let body = "";
				res.on("data", (chunk) => {
					body += chunk;
				});
				res.on("end", () => {
					try {
						const { data } = JSON.parse(body);
						resolve({
							totalSeconds: Math.round(data.total_seconds ?? 0),
							topLanguage: data.languages?.[0]?.name ?? null,
						});
					} catch {
						resolve(null);
					}
				});
			},
		);
		req.on("error", (error) => {
			console.warn(`[wakatime] could not fetch stats: ${error.message}`);
			resolve(null);
		});
		req.setTimeout(20000, () => {
			req.destroy();
			console.warn("[wakatime] request timed out");
			resolve(null);
		});
		req.end();
	});
}

export default defineConfig(async ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const wakatime = await fetchWakaTime(env.WAKATIME_API_KEY);

	return {
		plugins: [tailwindcss(), react()],
		define: {
			__COMMIT_HASH__: JSON.stringify(commitHash),
			__WAKATIME__: JSON.stringify(wakatime),
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
	};
});
