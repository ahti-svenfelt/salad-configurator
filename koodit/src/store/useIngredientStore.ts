import { create } from "zustand";
import type { Ingredient, Bowl } from "../types";

interface IngredientStore {
    slots: Record<string, Ingredient | null>
    baseType: number
    selectedBowl: Bowl | null

    setBaseType: (id: number) => void
    setBowl: (bowl: Bowl | null) => void
    clearSelection: () => void

    addIngredient: (item: Ingredient) => void
    removeIngredient: (id: string) => void
}

export const useIngredientStore = create <IngredientStore>((set) => ({
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
    
    addIngredient: (item) => {
        console.warn('addIngredient not implemented', item)
    },

    removeIngredient: (id) => {
        console.warn('removeIngredient not implemented', id)
    },
}))