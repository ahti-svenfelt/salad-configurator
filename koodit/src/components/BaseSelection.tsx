import type { Ingredient } from "../types"

interface BaseSelectionProps {
    ingredients: Ingredient[];
}

export default function BaseSelection({ ingredients }: BaseSelectionProps) {
    const bases = ingredients.filter(item => item.categoryId === 6)

    return(
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                2
            </div>
            <div className="border-b border-gray-600 pb-2 flex flex-col justify-end gap-4 items-center w-full">
                {bases.map(base => (
                    <div key={base.id} className="flex justify-between items-center">
                        <span>{base.name}</span>
                    </div>
                ))},
            </div>
        </div>
    )
}