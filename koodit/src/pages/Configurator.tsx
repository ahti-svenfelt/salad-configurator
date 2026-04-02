import CenterBowl from "../components/CenterBowl";
import { useState, useEffect } from "react";
import { getBowls } from "../services/api"; // 👈 lisää tämä
import type { Bowl, Category, Ingredient } from "../types";

export default function Configurator() {
    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        const fetchBowls = async () => {
            try {
                const data = await getBowls();
                setBowls(data);
            } catch (error) {
                console.error("Failed to fetch bowls:", error);
            }
        };

        fetchBowls();
    }, []);

    return <CenterBowl />;
}