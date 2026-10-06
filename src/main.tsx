import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const reduceMotion =
	window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// Touch devices keep native scrolling: Lenis only smooths the wheel, so
// phones don't get laggy scroll-jacking.
const finePointer =
	window.matchMedia?.("(hover: hover) and (pointer: fine)").matches ?? false;

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{reduceMotion || !finePointer ? (
			<App />
		) : (
			<ReactLenis
				root
				options={{
					lerp: 0.1,
					wheelMultiplier: 1,
					normalizeWheel: true,
					smoothWheel: true,
					gestureOrientation: "vertical",
				}}
			>
				<App />
			</ReactLenis>
		)}
	</StrictMode>,
);
