import React from "react";
import { useIngredientStore } from "../store/useIngredientStore";

const SummaryBar: React.FC = () => {
  const { slots, removeIngredient } = useIngredientStore();

  const activeIngredients = Object.values(slots).filter(
    (ingredient) => ingredient !== null
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">Valinnat:</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
            {activeIngredients.length} kpl
          </span>
        </div>

        <div className="flex flex-wrap gap-2 overflow-x-auto py-2">
          {activeIngredients.map((ingredient, index) => (
            <div
              key={`${ingredient.id}-${index}`}
              className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-sm"
            >
              <span>{ingredient.name}</span>
              <button
                onClick={() => removeIngredient(ingredient.id)}
                className="text-gray-400 hover:text-red-500 font-bold"
                title="Poista"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700">
          Jatka
        </button>
      </div>
    </div>
  );
};

export default SummaryBar;