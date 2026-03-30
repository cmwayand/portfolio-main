"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IBasePageProps {
	children: React.ReactNode;
	navChildren?: React.ReactNode;
}
//hello
export function BasePage({ children, navChildren }: IBasePageProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const nav = (
		<nav className="w-[100vw] flex sm:justify-start justify-between pr-2 fixed top-0 left-0 right-0 space-x-8 z-50 bg-gray-900 ">
			<ul
				className="flex justify-start space-x-4 py-4 px-4"
				style={{ cursor: "pointer" }}
				onClick={() => {
					if (window.location.pathname !== "/" || window.location.hash !== "") {
						window.location.href = "/";
					}
				}}
			>
				<motion.img
					src="logo1.svg"
					width={25}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				/>
				<a style={{ textWrap: "nowrap" }}>Claire Wayand</a>
			</ul>
			{navChildren && (
				<div className="sm:hidden flex justify-end px-4 py-4">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-white focus:outline-none"
					>
						{isMenuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
			)}
			<div className="hidden sm:flex gap-4 align-middle justify-center">
				{navChildren}
			</div>
			{isMenuOpen && (
				<div
					className="flex flex-col w-[200px] absolute top-full right-10 bg-gray-900 bg-opacity-80 backdrop-blur-md flex flex-col items-center space-y-4 py-4"
					onClick={() => setIsMenuOpen(false)}
					ref={menuRef}
				>
					{navChildren}
				</div>
			)}
		</nav>
	);
	return (
		<div
			className="bg-gray-900 text-white min-h-screen w-[100vw]"
			style={{ overflowX: "hidden" }}
		>
			{nav}
			{children}
		</div>
	);
}
