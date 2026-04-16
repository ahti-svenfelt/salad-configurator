import { describe, it, expect } from "vitest";
import { calculateTotalWeight } from "./calculations";

describe("calculateTotalWeight", () => {
    it("calculates total weight correctly", () => {
        const mockIngredients = [
            { weight_grams: 50 },
            { weight_grams: 100 }
        ];

        const result = calculateTotalWeight(mockIngredients);

        expect(result).toBe(150);
    });
});