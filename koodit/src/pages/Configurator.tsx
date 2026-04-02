import CenterBowl from "../components/CenterBowl";
import { useState } from "react";
import type { Bowl, Category, Ingredient } from "../types";
import { useIngredientStore } from "../store/useIngredientStore";

export default function Configurator() {
    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const baseType = useIngredientStore((s) => s.baseType);

    const filteredBowls = bowls.filter(b => b.base_type_id === baseType);
    const filteredCategories = categories.filter(c => c.base_type_id === baseType);

    return(
        <CenterBowl 
            bowls={filteredBowls}
            categories={filteredCategories}
        />
    )
}