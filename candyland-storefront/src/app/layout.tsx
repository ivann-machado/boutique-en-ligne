import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Bangers } from 'next/font/google';

// export const metadata: Metadata = {
// 	metadataBase: new URL(getBaseURL()),
// }

const bangers = Bangers({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-bangers'
});

export const metadata = {
	title: 'Candy Land Pop Art Shop',
	description: 'Your daily dose of sweet chaos!',
};

export default async function RootLayout(props: {children: React.ReactNode;}) {
	return (
	// 2. Apply the font variable to the HTML element
		<html lang="en" className={`${bangers.variable}`}>
		<body>
			<div className="min-h-screen w-full font-['Bangers',_cursive] overflow-x-hidden relative" style={{
				backgroundColor: '#ffeb3b',
				backgroundImage: 'radial-gradient(#ff0090 20%, transparent 20%)',
				backgroundSize: '20px 20px'}}>
				<div className="flex justify-center w-full min-h-screen items-start py-4 md:py-8">
					<div className="w-[95%] max-w-7xl bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col">
						{props.children}
					</div>
				</div>
			</div>
		</body>
		</html>
		);
}