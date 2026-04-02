import { useState, useEffect } from "react";
import CenterBowl from "../components/CenterBowl";
import { getBowls, getCategories, getIngredients } from "../services/api";
import type { Bowl, Category, Ingredient } from "../types";

export default function Configurator() {
    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const [bowlsData, categoriesData, ingredientsData] = await Promise.all([
                    getBowls(),
                    getCategories(),
                    getIngredients()
                ]);

                setBowls(bowlsData);
                setCategories(categoriesData);
                setIngredients(ingredientsData);
            } catch (error) {

                console.error("Datan haku epäonnistui:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="flex justify-center p-10">Ladataan aineksia...</div>;
    }

    return <CenterBowl />;
} 