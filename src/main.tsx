import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const reduceMotion =
	window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{reduceMotion ? (
			<App />
		) : (
			<ReactLenis
				root
				options={{
					lerp: 0.08,
					duration: 2.2,
					easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
					wheelMultiplier: 0.6,
					touchMultiplier: 1.5,
					normalizeWheel: true,
					smoothWheel: true,
					syncTouch: true,
					gestureOrientation: "vertical",
				}}
			>
				<App />
			</ReactLenis>
		)}
	</StrictMode>,
);
