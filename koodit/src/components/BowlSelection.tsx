import type { Bowl } from "../types";

interface BowlSelectionProps {
    bowls: Bowl[];
}

export default function BowlSelection({ bowls }: BowlSelectionProps) {
    return (
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                1
            </div>

            {bowls.map((bowl) => (
                <button
                    key={bowl.id}
                    className={`h-12 border-2 rounded-xl flex items-center px-4 ${
                        selectedBowl?.id === bowl.id
                            ? "border-white"
                            : "border-gray-600"
                    }`}
                    onClick={() => setBowl(bowl)}
                >
                    {bowl.name}
                </button>
            ))}
            
            {bowls.map((bowl) => (
                <button
                    key={bowl.id}
                    className={`h-12 border-2 rounded-xl flex items-center px-4 ${
                        selectedBowl?.id === bowl.id
                            ? "border-white"
                            : "border-gray-600"
                    }`}
                    onClick={() => setBowl(bowl)}
                >
                    {bowl.name}
                </button>
            ))}

            <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4">

            {bowls.length === 0 && (
                <p className="text-sm text-gray-400 mt-2">Ei kulhoja ladattu...</p>
            )}
        </div>
    );
}