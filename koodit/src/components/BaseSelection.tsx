import { useIngredientStore } from "../store/useIngredientStore";
import type { Ingredient } from "../types"

interface BaseSelectionProps {
    ingredients: Ingredient[];
}

export default function BaseSelection({ ingredients }: BaseSelectionProps) {
    const bases = ingredients.filter(item => item.categoryId === 6)

    const slots = useIngredientStore(s => s.slots);
    const addIngredient = useIngredientStore(s => s.addIngredient);

    const selectedBase = slots.base || null;

    return(
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                2
            </div>
            <div className="font-bold rounded-full flex items-center justify-center mb-4 shrink-0">
                <p>Valitse salaattipohja</p>
            </div>

            <div className="border-b border-gray-600 pb-2 flex flex-col justify-end gap-4 items-center w-full">
                {bases.map(base => (
                    <button 
                        key={base.id}
                        onClick={() => addIngredient(base)}
                        className={`w-full text-left px-4 py-2 border-2 rounded-xl transition-colors ${
                            selectedBase?.id === base.id
                                ? "border-[#A2D135] text-[#A2D135]"
                                : "border-gray-600 text-white"
                        }`}
                    >
                        {base.name} {base.image_url && (
                            <img
                                src={base.image_url}
                                alt={base.name}
                                className="w-full h-10 object-cover rounded-md"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}