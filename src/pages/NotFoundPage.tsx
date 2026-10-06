import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
	const navigation = useNavigate();
	useEffect(() => {
		document.title = "Page Not Found | Nafisarkar";
		setTimeout(() => {
			navigation("/");
		}, 2000); // Redirect after 2 seconds
	}, [navigation]);
	return (
		<main className="w-full max-w-screen-md mx-auto px-4 py-10 flex min-h-[60vh] flex-col items-center justify-center">
			<h1 className="font-hand text-4xl text-highlight-green">404</h1>
			<p className="mt-2 text-sm lowercase text-gray-5">
				page not found — taking you home...
			</p>
		</main>
	);
};

export default NotFoundPage;
