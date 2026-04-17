import { create } from "zustand";
import { getPrices } from "../services/api";

export interface PriceListItem {
    item_id: number;
    name: string;
    price: number;
}

interface PriceStoreState {
    prices: PriceListItem[];
    fetchPrices: (token: string) => Promise<void>;
}

export const usePriceStore = create<PriceStoreState>((set) => ({
    prices: [],

    fetchPrices: async (token: string) => {
        try {
            const data = await getPrices(token);
            set({ prices: data })
        } catch (error) {
            console.error("Failed to fetch prices:", error);
            set({ prices: [] });
        }
    }
}));