import CenterBowl from "../components/CenterBowl";
import { useState } from "react";
import type { Bowl, Category, Ingredient } from "../types";

export default function Configurator() {
    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    return <CenterBowl />
}