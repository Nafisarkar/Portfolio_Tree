import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../../constants";
import Toggle from "../ui/toggle";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setIsOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
				<div className="max-w-5xl mx-auto px-6">
					<div className="flex justify-between items-center h-16">
						{/* Logo/Toggle */}
						<div className="flex items-center">
							<Toggle />
						</div>

						{/* Desktop Menu */}
						<div className="hidden lg:flex items-center space-x-8">
							{NAV_LINKS.map((link) => (
								<NavLink
									key={link.href}
									to={link.href}
									className={({ isActive }) =>
										cn(
											"text-sm font-medium transition-colors hover:text-primary",
											isActive
												? "text-primary underline underline-offset-4"
												: "text-muted-foreground",
										)
									}
								>
									{link.label}
								</NavLink>
							))}
							<Button
								variant="default"
								size="sm"
								onClick={() => {
									const link = document.createElement("a");
									link.href = "/resume.pdf";
									link.setAttribute("download", "resume.pdf");
									link.style.display = "none";
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
								}}
							>
								Resume
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden flex items-center">
							<button
								type="button"
								onClick={toggleMenu}
								className="p-2 text-foreground hover:bg-accent transition-colors"
								aria-label="Toggle menu"
							>
								{isOpen ? (
									<AiOutlineClose size={24} />
								) : (
									<AiOutlineMenu size={24} />
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={toggleMenu}
							className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
						/>
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed right-0 top-0 bottom-0 w-[280px] bg-background z-[70] lg:hidden p-6 shadow-2xl"
						>
							<div className="flex flex-col space-y-6 mt-16">
								{NAV_LINKS.map((link) => (
									<NavLink
										key={link.href}
										to={link.href}
										onClick={toggleMenu}
										className={({ isActive }) =>
											cn(
												"text-lg font-medium transition-colors hover:text-primary",
												isActive ? "text-primary" : "text-muted-foreground",
											)
										}
									>
										{link.label}
									</NavLink>
								))}
								<Button
									className="w-full"
									onClick={() => {
										toggleMenu();
										// Resume download logic
									}}
								>
									Resume
								</Button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
