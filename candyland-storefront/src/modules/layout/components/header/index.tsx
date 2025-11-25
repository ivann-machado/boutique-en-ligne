import { ShoppingCart, Search } from 'lucide-react';

const Header = (props) => {
	return (
		<nav className="bg-cyan-300 border-b-[6px] border-black p-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
			<div className="transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
				<h1 className="text-6xl md:text-7xl text-pink-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
					style={{ WebkitTextStroke: '2px black' }}>
					CANDY LAND!
				</h1>
			</div>

			<div className="flex gap-4">
				<button className="bg-white border-[3px] border-black p-2 hover:bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all">
					<Search size={28} />
				</button>
				<button className="bg-yellow-400 border-[3px] border-black p-2 hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all relative">
					<ShoppingCart size={28} />
					{/*Definir props pour avoir le nombre d'article dans le panier et l'afficher ci dessous*/}
					{/*<span className="absolute -top-3 -right-3 bg-red-600 text-white border-[2px] border-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-sans font-bold">3</span>*/}
				</button>
			</div>
		</nav>
		);
};
export default Header;