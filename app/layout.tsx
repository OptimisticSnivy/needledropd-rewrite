import "./globals.css";
import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const plexSans = IBM_Plex_Sans({
	variable: "--font-plex-sans",
	subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
	weight: "400",
	variable: "--font-plex-mono",
});

export const metadata: Metadata = {
	title: "needledropd",
	description: "Rate Music Albums",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${plexSans.variable} ${plexMono.variable} antialiased `}>
				<Navbar />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
