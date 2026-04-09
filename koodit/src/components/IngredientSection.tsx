import React, { useState, useMemo } from 'react';

interface Ingredient {
  id: string | number;
  name: string;
  image?: string;
}

interface IngredientSectionProps {
  ingredients: Ingredient[];
}

const IngredientSection: React.FC<IngredientSectionProps> = ({ ingredients }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [ingredients, searchQuery]);

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Ainesosat</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Etsi ainesosia..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredIngredients.map((ingredient) => (
          <div 
            key={ingredient.id} 
            className="p-3 border rounded-md bg-white shadow-sm flex items-center"
          >
            <span className="capitalize">{ingredient.name}</span>
          </div>
        ))}
      </div>

      {filteredIngredients.length === 0 && (
        <p className="text-gray-500 mt-4 italic">
          Ei ainesosia hakusanalla "{searchQuery}"
        </p>
      )}
    </section>
  );
};

export default IngredientSection;