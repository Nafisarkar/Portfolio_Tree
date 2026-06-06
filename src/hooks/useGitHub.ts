import { useEffect, useState } from "react";
import { GITHUB_USERNAME } from "../constants";

export const useGitHub = () => {
	const [repoDetails, setRepoDetails] = useState({
		repocount: 0,
		gitfollowers: 0,
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRepoDetails = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${GITHUB_USERNAME}`,
				);
				if (!response.ok) throw new Error("Failed to fetch GitHub data.");
				const data = await response.json();
				setRepoDetails({
					repocount: data.public_repos,
					gitfollowers: data.followers,
				});
			} catch (err) {
				console.error("Error fetching repository details:", err);
				setError("Failed to fetch GitHub data.");
			} finally {
				setLoading(false);
			}
		};
		fetchRepoDetails();
	}, []);

	return { repoDetails, loading, error };
};
