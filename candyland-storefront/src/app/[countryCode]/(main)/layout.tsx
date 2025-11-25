// import { usePathname } from 'next/navigation';
import Header from "@modules/layout/components/header";
import Footer from "@modules/layout/components/footer";
import { retrieveCustomer } from "@lib/data/customer"


export default async function MainLayout({ children }: { children: React.ReactNode }) {
	const customer = await retrieveCustomer()

	return (
		<>
		<Header customer={customer}/>

		<main className="relative">{children}</main>

		<Footer />
		</>
		);
}