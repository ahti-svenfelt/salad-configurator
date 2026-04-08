import IngredientCard from "./IngredientCard"
import type { Category, Ingredient } from "../types"
import { useState } from "react";

interface IngredientSectionProps {
    categories: Category[];
    ingredients: Ingredient[];
}
export default function IngredientSection({ categories, ingredients }: IngredientSectionProps) {
    const [activeCategory, setActiveCategory] = useState<"all" | number>("all")

    const filteredCategories = categories.filter(cat => cat.id !== 6)
    const filteredIngredients = 
        activeCategory === "all"
            ? ingredients.filter(ing => ing.categoryId !== 6)
            : ingredients.filter(ing => ing.categoryId === activeCategory)

    return(
        <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
            <div>
                <input type="text" className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135]"/>
            </div>
            <div>
                <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-6 py-2 rounded-full font-bold ${
                        activeCategory === "all"
                            ? "bg-[#A2D135] text-black"
                            : "bf-zinc-600 text-white"
                    }`}
                >
                    All
                </button>
                {filteredCategories.map(cat => (
                    <p key={cat.id} className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
                        {cat.name}
                    </p>
                ))}
            </div>
            <div>
                {filteredIngredients.map(ingredient => (
                    <IngredientCard key={ingredient.id} ingredient={ingredient}/>
                ))}
            </div>
        </div>
    )
}