import React from "react";
import type { Ingredient } from "../types";

interface Props {
    ingredient: Ingredient;
}

const dietLabels: Record<string, string> = {
    G: "Gluten-free",
    L: "Lactose-free",
    V: "Vegan",
};

export default function IngredientCard({ ingredient }: Props) {
    return(
        <div className="w-44 h-44 rounded-xl p-4 shadow-md bg-white flex flex-col justify-between">
            <div className="text-lg font-semibold text-gray-900 break-words">
                {ingredient.name}
            </div>

            <div className="flex flex-wrap gap-2">
                {ingredient.diets.map((diet) => (
                    <span key={diet} className="text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wide">
                        {dietLabels[diet]}
                    </span>
                ))}
            </div>
        </div>
    );
}