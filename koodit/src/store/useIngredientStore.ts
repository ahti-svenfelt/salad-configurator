import { create } from 'zustand';
import type { Bowl, Ingredient } from '../types';

interface IngredientState {
  slots: Record<string, Ingredient | null>
  baseType: number
  selectedBowl: Bowl | null

  setBaseType: (id: number) => void
  setBowl: (bowl: Bowl | null) => void
  clearSelection: () => void

  addIngredient: (item: Ingredient) => void
  removeIngredient: (id: number) => void
  clearSlot: (slotKey: string) => void
}

export const useIngredientStore = create<IngredientState>((set) => ({
  slots: {},
  baseType: 1,
  selectedBowl: null,

  setBaseType: (id) =>
    set(() => ({
      baseType: id,
    })),

  setBowl: (bowl) =>
    set(() => ({
      selectedBowl: bowl,
    })),
    
  clearSelection: () =>
    set(() => ({
      slots: {},
      baseType: 1,
      selectedBowl: null,
    })),

  addIngredient: (item: Ingredient) => {
    set((state) => {
      if (item.categoryId === 6) {
        return {
          slots: { ...state.slots, base: item },
        };
      }

      const slotCount = state.selectedBowl?.slot_count || 0;
      for (let i = 1; i <= slotCount; i++) {
        const slotKey = `slot-${i}`;
        if (!state.slots[slotKey]) {
          return {
            slots: { ...state.slots, [slotKey]: item },
          };
        }
      }
      return state;
    });
  },

  removeIngredient: (id: number) => {
    set((state) => {
      const newSlots = { ...state.slots };
      const keyToRemove = Object.keys(newSlots).find(
        (key) => newSlots[key]?.id === id
      );

      if (keyToRemove) {
        newSlots[keyToRemove] = null;
        return { slots: newSlots };
      }
      return state;
    });
  },

  clearSlot: (slotKey: string) =>
    set((state) => ({
      slots: { ...state.slots, [slotKey]: null}
    })),
}));