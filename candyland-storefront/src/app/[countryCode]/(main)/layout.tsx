"use client";
import { usePathname } from 'next/navigation';
import Header from "@modules/layout/components/header";
import Footer from "@modules/layout/components/footer";


export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
		<Header />

		<main className="relative">{children}</main>

		<Footer />
		</>
		);
}