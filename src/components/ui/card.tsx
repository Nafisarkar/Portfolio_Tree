import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
	return (
		<div
			data-slot="card"
			className={cn(
				"flex flex-col gap-4 shadow-shadow border-2 border-border bg-background text-foreground font-base",
				className,
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }) {
	return (
		<div
			data-slot="card-header"
			className={cn("flex flex-col gap-2 px-6 pt-6", className)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }) {
	return (
		<div
			data-slot="card-title"
			className={cn("font-heading leading-none", className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-sm font-base", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }) {
	return (
		<div
			data-slot="card-action"
			className={cn("self-start justify-self-end", className)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }) {
	return (
		<div
			data-slot="card-content"
			className={cn("px-6", className)}
			{...props}
		/>
	);
}

function CardFooter({ className, ...props }) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center px-6 pb-6 mt-auto", className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
