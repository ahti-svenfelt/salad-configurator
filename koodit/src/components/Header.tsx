import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="bg-zinc-800 text-white w-full h-32 flex justify-between items-start px-8 pt-4">
            <Link to="/" className="w-24 h-24 rounded full border-4 border-[#A2D135] flex items-center justify-center flex-col -mt-2 bg-zinc-800 shadow-lg">
                Fresh Food Factory
                FRESSE
            </Link>

            <h1 className="text-3x1 font-black tracking-widest mt-6">
                BOWL-LASKURI
            </h1>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mt-4 w-10 h-10 flex items-center justify-center"
            >
                <div
                    className={`flex flex-col gap-2 transition-transform duration-300 origin-center ${
                        isMenuOpen ? "rotate-90" : "rotate-0"
                    }`}
                >
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                </div>
            </button>

            {isMenuOpen && (
                <div
                    className={`absolute right-8 top-32 bg-[#A2D135] text-black rounded-b-3xl rounded-t-xl px-6 py-4 flex flex-col gap-2 min-w-[200px] shadow-md transition-all duration-300 ${
                        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                >
                    <Link to="/community" className="font-semibold hover:underline">
                        Saved recipes
                    </Link>
                </div>
            )}  
        </header>
    )
}