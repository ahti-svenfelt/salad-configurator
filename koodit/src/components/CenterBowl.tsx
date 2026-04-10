import React from 'react';
import { useIngredientStore } from '../store/useIngredientStore';
import type { Bowl, Category } from '../types';

interface Props {
    bowls: Bowl[];
    categories: Category[];
}

export default function CenterBowl({ bowls, categories }: Props) {
  const setBaseType = useIngredientStore((s) => s.setBaseType);
  const baseType = useIngredientStore((s) => s.baseType);

  const slots = useIngredientStore((s) => s.slots);
  const selectedBowl = useIngredientStore((s) => s.selectedBowl);
<<<<<<< 79-task-48-action-buttons-trash-can-undo-save
  const clearSelection = useIngredientStore((s) => s.clearSelection);
=======
>>>>>>> main

  const activeIngredients = Object.values(slots).filter((i) => i !== null);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">
      <div>
        <button onClick={() => alert("Feature coming soon")}>
          ↩️
        </button>

        <button onClick={() => alert("Feature coming soon")}>
          💾
        </button>

        <button onClick={() => {
            if (window.confirm('Are you sure you want to empty the bowl')) {
              clearSelection();
            }
          }}
        >
          🗑️
        </button>
      </div>
      
      <div>
        <button 
          className="flex gap-3 mb-6 items-center"
          onClick={() => setBaseType(1)}
        >
          Salaatti
        </button>

        <button 
          className="flex gap-3 mb-6 items-center"
          onClick={() => setBaseType(2)}
        >
          Rahka
        </button>

        <div>
          {bowls.map((b) => (
            <div key={b.id}>{b.name}</div>
              ))}
            </div>
        </div>

        <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 
          flex flex-wrap items-center justify-center shadow-inner relative p-4"
          >
          {activeIngredients.map((ing) => (
            <span
              key={ing!.id}
              className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm m-1 shadow"
            >
              {ing!.name}
            </span>
              ))}
        </div>
        <div>
          100 g / 1,99 €  
          <br />
          {selectedBowl ? selectedBowl.volume : 0} ml
      </div>
    </div>
  );
}