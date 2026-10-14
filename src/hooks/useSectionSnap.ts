import { useEffect, useRef } from "react";

/**
 * One snap boundary: between the landing screen and the projects section.
 * Scrolling inside the projects stays free in both directions — snapping only
 * happens when a scroll crosses between the two sections.
 *
 * Keying off the input gesture rather than the scroll position means the snap
 * fires as soon as the visitor stops.
 */
/** Pixels of movement needed before a gesture counts as intentional. */
const SNAP_THRESHOLD = 20;

/** Section tops are read live: font loading and resize both move them. */
const sectionTops = () =>
	[...document.querySelectorAll<HTMLElement>("[data-snap-section]")].map((el) =>
		Math.round(el.getBoundingClientRect().top + window.scrollY),
	);

export const useSectionSnap = () => {
	const lastSettled = useRef(0);
	const timer = useRef(0);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const settle = () => {
			const points = sectionTops();
			if (points.length < 2) return;

			const y = window.scrollY;
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

			window.scrollTo({ top: target });
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
	}, []);
};
