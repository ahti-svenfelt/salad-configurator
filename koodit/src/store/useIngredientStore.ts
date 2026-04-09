import { create } from 'zustand';

export interface Ingredient {
  id: number;
  name: string;
  categoryId: number;
}

interface IngredientState {
  selectedBowl: { slot_count: number } | null;
  slots: Record<string, Ingredient | null>;
  addIngredient: (item: Ingredient) => void;
}

export const useIngredientStore = create<IngredientState>((set) => ({
  selectedBowl: null,
  slots: {},

  addIngredient: (item: Ingredient) => {
    set((state) => {
      if (item.categoryId === 6) {
        return {
          slots: {
            ...state.slots,
            base: item,
          },
        };
      }

      const slotCount = state.selectedBowl?.slot_count || 0;

      for (let i = 1; i <= slotCount; i++) {
        const slotKey = `slot-${i}`;
        if (!state.slots[slotKey]) {
          return {
            slots: {
              ...state.slots,
              [slotKey]: item,
            },
          };
        }
      }

      return state;
    });
  },
}));