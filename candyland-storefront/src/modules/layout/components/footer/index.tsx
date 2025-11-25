import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-black text-white border-t-[6px] border-black relative">
			<div className="h-4 w-full bg-yellow-400" style={{
				backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%), linear-gradient(225deg, #000 25%, transparent 25%)',
				backgroundSize: '20px 20px',
				backgroundPosition: '0 0'
			}}></div>

			<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

				<div className="flex flex-col gap-4">
					<h3 className="text-5xl text-yellow-400" style={{ WebkitTextStroke: '1px white' }}>
						DON'T MISS OUT!
					</h3>
					<p className="text-2xl font-sans font-bold uppercase">
						Subscribe for explosive deals & sugar rushes.
					</p>
					<div className="flex gap-0 transform -rotate-1 hover:rotate-0 transition-transform">
						<div className="relative w-full">
							<input
								type="email"
								placeholder="YOUR EMAIL..."
								className="w-full bg-white text-black border-[3px] border-r-0 border-black p-3 font-sans font-bold text-lg focus:outline-none"
							/>
						</div>
						<button className="bg-pink-500 text-white border-[3px] border-black px-4 hover:bg-pink-400 flex items-center justify-center">
							<Mail size={24} />
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-2 text-center md:text-left">
					<h4 className="text-3xl text-cyan-400 underline decoration-wavy decoration-2 underline-offset-4 mb-2">
						QUICK LINKS
					</h4>
					<ul className="space-y-2 text-2xl tracking-wide">
						<li><a href="#" className="hover:text-yellow-400 hover:translate-x-2 inline-block transition-all">ABOUT US</a></li>
						<li><a href="#" className="hover:text-yellow-400 hover:translate-x-2 inline-block transition-all">SHIPPING</a></li>
						<li><a href="#" className="hover:text-yellow-400 hover:translate-x-2 inline-block transition-all">FAQ</a></li>
						<li><a href="#" className="hover:text-yellow-400 hover:translate-x-2 inline-block transition-all">RETURNS</a></li>
					</ul>
				</div>

				<div className="flex flex-col items-center md:items-end gap-6">
					<h4 className="text-3xl text-pink-500" style={{ WebkitTextStroke: '1px white' }}>
						FOLLOW THE FUN
					</h4>
					<div className="flex gap-4">
						<a href="#" className="bg-white text-black border-[3px] border-black p-2 rounded-lg hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[4px_4px_0px_0px_#fff] transition-all">
							<Instagram size={32} />
						</a>
						<a href="#" className="bg-white text-black border-[3px] border-black p-2 rounded-lg hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[4px_4px_0px_0px_#fff] transition-all">
							<Facebook size={32} />
						</a>
						<a href="#" className="bg-white text-black border-[3px] border-black p-2 rounded-lg hover:-translate-y-1 hover:bg-pink-500 hover:shadow-[4px_4px_0px_0px_#fff] transition-all">
							<Twitter size={32} />
						</a>
					</div>
					<div className="text-right">
						<p className="font-sans text-sm text-gray-400">© 2025 CANDY LAND INC.</p>
					</div>
				</div>
			</div>

			<div className="border-t-[3px] border-white/20 bg-black p-4 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm text-gray-400 font-bold tracking-wide">
				<div className="flex gap-6 flex-wrap justify-center">
					<a href="#" className="hover:text-yellow-400 transition-colors">MENTIONS LÉGALES</a>
					<span className="hidden md:inline">|</span>
					<a href="#" className="hover:text-cyan-400 transition-colors">CGV</a>
					<span className="hidden md:inline">|</span>
					<a href="#" className="hover:text-pink-500 transition-colors">POLITIQUE DE CONFIDENTIALITÉ</a>
					<span className="hidden md:inline">|</span>
					<a href="#" className="hover:text-white transition-colors">COOKIES</a>
				</div>
				<div className="text-gray-600 uppercase">
					Candy Land v0.0
				</div>
			</div>
		</footer>
		);
};
export default Footer;