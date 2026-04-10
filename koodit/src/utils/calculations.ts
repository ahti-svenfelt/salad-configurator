type HasWeight = {
  weight_grams?: number | null;
};

export function calculateTotalWeight(ingredients: HasWeight[]) {
    return ingredients.reduce((sum, item) => sum + (item.weight_grams || 0), 0);
}