import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

/**
 * One snap boundary: between the landing screen and the projects section.
 * Scrolling inside the projects stays free in both directions — snapping only
 * happens when a scroll crosses between the two sections.
 *
 * Native CSS scroll-snap can't drive this: Lenis owns the scroll
 * programmatically, so the browser never settles and the two fight. Routing it
 * through Lenis (where present) keeps a single clean motion; touch devices
 * scroll natively instead, so the snap falls back to a native smooth scroll.
 *
 * Keying off the input gesture rather than the scroll position means the snap
 * starts as soon as the visitor stops, instead of waiting for smoothing.
 */
/** Pixels of movement needed before a gesture counts as intentional. */
const SNAP_THRESHOLD = 20;

/** Section tops are read live: font loading and resize both move them. */
const sectionTops = () =>
	[...document.querySelectorAll<HTMLElement>("[data-snap-section]")].map((el) =>
		Math.round(el.getBoundingClientRect().top + window.scrollY),
	);

export const useSectionSnap = () => {
	const lenis = useLenis();
	const lastSettled = useRef(0);
	const timer = useRef(0);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		// With Lenis the animated scroll lags the gesture, so the intended
		// position is the right one to decide from.
		const position = () =>
			lenis ? (lenis.targetScroll ?? lenis.scroll) : window.scrollY;

		const settle = () => {
			const points = sectionTops();
			if (points.length < 2) return;

			const y = position();
			const last = points[points.length - 1];

			// Everything from the start of the final section down is free.
			if (y >= last) return;

			const moved = y - lastSettled.current;

			// Dead zone so trackpad jitter doesn't fire a snap.
			if (Math.abs(moved) < SNAP_THRESHOLD) return;
			lastSettled.current = y;

			// Continue in the direction of travel: down enters the section
			// below, up returns to the one above.
			const target =
				moved > 0
					? points.find((point) => point >= y)
					: [...points].reverse().find((point) => point <= y);

			if (target === undefined || Math.abs(target - y) < 2) return;

			if (lenis) {
				lenis.scrollTo(target, {
					duration: 0.6,
					easing: (t) => 1 - 2 ** (-10 * t),
				});
			} else {
				window.scrollTo({ top: target, behavior: "smooth" });
			}
			lastSettled.current = target;
		};

		const onGestureEnd = () => {
			window.clearTimeout(timer.current);
			timer.current = window.setTimeout(settle, 140);
		};

		const events = ["wheel", "touchmove", "touchend", "keydown"] as const;
		for (const event of events) {
			window.addEventListener(event, onGestureEnd, { passive: true });
		}
		return () => {
			window.clearTimeout(timer.current);
			for (const event of events) {
				window.removeEventListener(event, onGestureEnd);
			}
		};
	}, [lenis]);
};
