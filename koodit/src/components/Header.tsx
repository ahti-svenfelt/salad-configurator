import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    return(
        <header className="bg-zinc-800 text-white w-full h-32 flex justify-between items-start px-8 pt-4">
            <Link to="/" className="w-30 h-30 rounded full flex items-center justify-center flex-col -mt-2">
                <img src="https://salaattimestari.fi/wp-content/uploads/2025/12/Fresse_tunnus-_valko-viher_RGB_202511-300x300.png" alt="Fresse logo" />
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

                     <button
                        onClick={() => setIsLoginOpen(true)}
                        className="font-semibold text-left hover:underline"
                    >
                        Sign in
                    </button>
                </div>
            )}

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </header>
    )
}