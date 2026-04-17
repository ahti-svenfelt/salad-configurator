import React from "react";
import type { Ingredient } from "../types";
import { useIngredientStore } from "../store/useIngredientStore";
import { usePriceStore } from "../store/usePriceStore";
import { useAuthStore } from "../store/useAuthStore";

interface Props {
    ingredient: Ingredient;
}

const dietLabels: Record<string, string> = {
    G: "Gluten-free",
    L: "Lactose-free",
    V: "Vegan",
};

export default function IngredientCard({ ingredient }: Props) {
    const addIngredient = useIngredientStore((state) => state.addIngredient);

    const prices = usePriceStore((state) => state.prices);
    const token = useAuthStore((state) => state.token);

    const priceItem = prices.find((p) => p.item_id === ingredient.id);

    return(
        <button
            onClick={() => addIngredient(ingredient)}
            className="w-44 h-44 rounded-xl p-4 shadow-md bg-white flex flex-col justify-between"
        >
            {ingredient.image_url && (
                <img
                    src={ingredient.image_url}
                    alt={ingredient.name}
                    className="w-full h-20 object-cover rounded-md"
                />
            )}
            
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

            <div className="text-sm font-semibold text-gray-700 mt-2">
                {!token ? (
                    <span className="text-red-600">Login to see prices</span>
                ) : priceItem ? (
                    <span>+ {priceItem.price.toFixed(2)} €</span>
                ) : (
                    <span className="text-gray-400">No prices</span>
                )}
            </div>
        </button>
    );
}