function Skeleton({ className, ...props }) {
	return (
		<div
			data-slot="skeleton"
			className={`animate-pulse bg-gray-1 ${className ?? ""}`}
			{...props}
		/>
	);
}

export { Skeleton };
