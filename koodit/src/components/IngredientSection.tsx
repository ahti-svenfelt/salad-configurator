import IngredientCard from "./IngredientCard"
import type { Category, Ingredient } from "../types"
import { useState } from "react";

interface IngredientSectionProps {
    categories: Category[];
    ingredients: Ingredient[];
}

export default function IngredientSection({ categories, ingredients }: IngredientSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | number>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(cat => cat.id !== 6)
  
  const categoryFiltered =
    activeCategory === "all"
      ? ingredients.filter(ing => ing.categoryId !== 6)
      : ingredients.filter(ing => ing.categoryId === activeCategory);
  
  const filteredIngredients = categoryFiltered.filter(ing =>
    ing.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return(
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
      <div>
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135]"/>
      </div>

      <div>
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-6 py-2 rounded-full font-bold ${
            activeCategory === "all"
              ? "px-6 py-2 rounded-full font-bold"
              : "bg-zinc-600 text-white"
          }`}
        >
          Kaikki
        </button>

        {filteredCategories.map(cat => (
          <button 
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === cat.id
                ? "bg-[#A2D135] text-black"
                : "bg-zinc-600 text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div>
        {filteredIngredients.map(ingredient => (
          <IngredientCard key={ingredient.id} ingredient={ingredient}/>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-300 flex gap-6">
        <span className="flex items-center gap-2">
          <strong className="bg-[#A2D135] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">G</strong>
          = Gluteeniton
        </span>

        <span className="flex items-center gap-2">
          <strong className="bg-[#A2D135] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">L</strong>
          = Laktoositon
        </span>
        
        <span className="flex items-center gap-2">
          <strong className="bg-[#A2D135] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">V</strong>
          = Vegaaninen
        </span>
      </div>
    </div>
  )
}