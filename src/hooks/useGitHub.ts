import { useEffect, useState } from "react";
import { GITHUB_STATS_FALLBACK, GITHUB_USERNAME } from "../constants";

const CACHE_KEY = "github-stats";
const CACHE_TTL = 60 * 60 * 1000;

const readCache = () => {
	try {
		const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null");
		if (cached && Date.now() - cached.savedAt < CACHE_TTL) return cached.stats;
	} catch {
		// ignore unreadable cache
	}
	return null;
};

const writeCache = (stats) => {
	try {
		localStorage.setItem(
			CACHE_KEY,
			JSON.stringify({ stats, savedAt: Date.now() }),
		);
	} catch {
		// storage unavailable
	}
};

let pending = null;
const fetchStats = () => {
	if (!pending) {
		pending = fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
			.then((res) =>
				res.ok ? res.json() : Promise.reject(new Error("unavailable")),
			)
			.then((data) => ({
				repocount: data.public_repos,
				gitfollowers: data.followers,
			}))
			.finally(() => {
				pending = null;
			});
	}
	return pending;
};

export const useGitHub = () => {
	const [repoDetails, setRepoDetails] = useState(
		() => readCache() ?? GITHUB_STATS_FALLBACK,
	);

	useEffect(() => {
		if (readCache()) return;
		let active = true;
		fetchStats()
			.then((stats) => {
				if (!active) return;
				setRepoDetails(stats);
				writeCache(stats);
			})
			.catch(() => {
				// keep fallback values when the API is rate limited
			});
		return () => {
			active = false;
		};
	}, []);

	return { repoDetails };
};
