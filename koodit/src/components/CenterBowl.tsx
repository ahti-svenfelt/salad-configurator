import React from 'react';
import { useIngredientStore } from '../store/useIngredientStore';

const CenterBowl: React.FC = () => {
  const slots = useIngredientStore((state) => state.slots);
  const activeIngredients = Object.values(slots).filter(
    (ingredient) => ingredient !== null
  );

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[300px] p-8 bg-gray-50 rounded-full border-4 border-dashed border-gray-200">
      <h2 className="absolute top-4 text-sm font-semibold text-gray-400 uppercase tracking-widest">
        Sinun kulhosi
      </h2>

      <div className="flex flex-wrap justify-center gap-2 max-w-[80%]">
        {activeIngredients.length > 0 ? (
          activeIngredients.map((ingredient, index) => (
            <div
              key={`${ingredient.id}-${index}`}
              className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium shadow-sm animate-in fade-in zoom-in duration-300"
            >
              {ingredient.name}
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">Kulho on vielä tyhjä...</p>
        )}
      </div>

      <div className="absolute bottom-0 w-full h-1/4 bg-gray-200/50 rounded-b-full -z-10" />
    </div>
  );
};

export default CenterBowl;