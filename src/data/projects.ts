import type { Project } from "../types";

const projects: Project[] = [
	{
		id: 6244,
		category: "Desktop App",
		title: "Pdf Maestro",
		description:
			"A high-performance, cross-platform desktop PDF viewer and engine built for native speed and a minimal interface.",
		techstacks: ["Tauri", "Rust", "React", "Jotai"],
		link: "https://github.com/Nafisarkar/Pdf_Maestro",
	},
	{
		id: 6222,
		category: "Desktop App",
		title: "Alpha Mango",
		description:
			"A lightweight, high-performance MongoDB GUI client, built as a fast native alternative to Compass with real-time cluster connections and dynamic schema exploration.",
		techstacks: ["Tauri", "Rust", "React", "MongoDB"],
		link: "https://github.com/Nafisarkar/Alpha-mango",
	},
	{
		id: 28,
		category: "IoT",
		title: "IoT OMR Scanner",
		description:
			"An IoT-based system that automates OMR sheet evaluation, combining ESP32-CAM image capture with OpenCV processing for accurate, real-time results in exam centers.",
		techstacks: ["Python", "OpenCV", "ESP32-CAM", "Embedded C"],
		link: "https://github.com/Nafisarkar/IOT_OMR_SCANNER",
	},
	{
		id: 58,
		category: "Mobile App",
		title: "Rice Leaf Disease Detector",
		description:
			"An on-device Flutter app that runs a TensorFlow Lite CNN to detect rice leaf diseases from a photo.",
		techstacks: ["Flutter", "TensorFlow Lite", "Dart"],
		link: "https://github.com/Nafisarkar/Rice_Leaf_Disease_Detector",
	},
	{
		id: 33,
		category: "Desktop App",
		title: "Bulk RAW to JPG/PNG Converter",
		description:
			"A fast desktop app for batch-converting RAW images to JPG/PNG, with multithreaded processing, live progress, error handling, and detailed conversion reports.",
		techstacks: ["Python", "CustomTkinter", "rawpy", "Pillow", "NumPy"],
		link: "https://github.com/Nafisarkar/Bulk-RAW-to-JPG-PNG-Converter",
	},
	{
		id: 6234,
		category: "Machine Learning",
		title: "Genre Classification of Books",
		description:
			"A machine learning project that classifies book genres by analysing the actual context of the literature, moving past manual categorization and surface-level metadata.",
		techstacks: ["Python", "Jupyter", "NLP"],
		link: "https://github.com/Nafisarkar/Genre-Classification-of-Books",
	},
	{
		id: 43,
		category: "Web Development",
		title: "FELX LMS",
		description:
			"A comprehensive Learning Management System with a robust backend, a mobile application, and a modern web interface.",
		techstacks: ["TypeScript", "React", "Node.js"],
		link: "https://github.com/Nafisarkar/FELX-LMS",
	},
	{
		id: 32,
		category: "Web Development",
		title: "Expense Tracker",
		description:
			"A full-stack expense tracker built with React, Express.js, and PostgreSQL, with a clean responsive interface and secure authentication.",
		techstacks: [
			"TypeScript",
			"React",
			"Express.js",
			"PostgreSQL",
			"TailwindCSS",
			"Bun",
		],
		link: "https://github.com/Nafisarkar/Expense_Tracker",
	},
	{
		id: 46,
		category: "Web Development",
		title: "IQRA - Knowledge Platform",
		description:
			"A full-stack knowledge platform sharing Islamic content in Bengali, Arabic, and English, with JWT authentication, role-based access, and prayer-time integration.",
		techstacks: [
			"React",
			"Node.js",
			"Express.js",
			"MongoDB",
			"TailwindCSS",
			"JWT",
		],
		link: "https://github.com/Nafisarkar/IQRA_Mern_Website",
	},
	{
		id: 26,
		category: "Chrome Extension",
		title: "WordStorage",
		description:
			"A Chrome extension for saving, organising, and revisiting vocabulary with a smooth animated interface.",
		techstacks: ["JavaScript", "Tailwind CSS", "Framer Motion"],
		link: "https://github.com/Nafisarkar/WordStorage-Chrome-Extension",
	},
	{
		id: 31,
		category: "Web Scraper",
		title: "Indexify",
		description:
			"A focused web scraping solution for major Bangladeshi tech retailers, built for research and price comparison.",
		techstacks: ["JavaScript", "Puppeteer"],
		link: "https://github.com/Nafisarkar/PuppetJS-Scaper-Backend",
	},
	{
		id: 39,
		category: "Mobile App",
		title: "DIU Transport",
		description:
			"An Android app providing real-time university bus schedules for a smoother, more efficient daily commute.",
		techstacks: ["Java", "Android"],
		link: "https://github.com/Nafisarkar/DiuTransportUser",
	},
];

export default projects;
