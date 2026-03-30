import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Claire Wayand",
	description: "Portfolio",
	icons: {
		icon: "/claire.png",
		apple: "/claire.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
