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
  const clearSelection = useIngredientStore((s) => s.clearSelection);

  const activeIngredients = Object.values(slots).filter((i) => i !== null);
  const clearSlot = useIngredientStore((s) => s.clearSlot);

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
              <div key={b.id}></div>
                ))}
          </div>
      </div>

      <div className={`w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 
        flex flex-wrap items-center justify-center shadow-inner relative p-4 ${selectedBowl?.shape === 'square' ? 'rounded-xl' : 'rounded-full'}`}
      >
        {(() => {
          const baseImage =
            selectedBowl?.image_url ||
            bowls.find((b) => b.base_type_id === baseType)?.image_url;

          if (!baseImage) return null;

          return (
            <img
              src={baseImage}
              alt="Base"
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
            />
          );
        })()}

        {slots.base && (
          <div className="absolute inset-0 z-15 pointer-events-none">
            <img
              src={slots.base.image_url}
              alt={slots.base.name}
              className="absolute inset-0 w-full h-full object-contain rounded-full opacity-90 scale-85"
            />
          </div>
        )}

        {selectedBowl?.slot_count && (
          <img
            src={selectedBowl.slot_count === 4
              ? "https://www.cc.puv.fi/~asa/fresh/images/jakaja_4_lohkoa.png"
              : "https://www.cc.puv.fi/~asa/fresh/images/jakaja_6_lohkoa.png"}
            alt="Divider"
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />
        )}

        {Object.entries(slots).map(([slotKey, ing]) => {
          if(!ing) return null;
          return(
            <div
              key={slotKey}
              className="absolute inset-0 z-30 pointer-events-none"
            >
              <img
                src={ing.wedge_image_url}
                alt={ing.name}
                className="absolute inset-0 w-full h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearSlot(slotKey);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow pointer-events-auto"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div>
        100 g / 1,99 € {selectedBowl ? selectedBowl.volume : 0} ml
      </div>
    </div>
  );
}