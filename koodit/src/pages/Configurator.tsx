import { useState, useEffect } from "react";
import CenterBowl from "../components/CenterBowl";
import { getBowls, getCategories, getBaseIngredients, getIngredients } from "../services/api";
import type { Bowl, Category, Ingredient } from "../types";
import { useIngredientStore } from "../store/useIngredientStore";
import BowlSelection from "../components/BowlSelection";
import BaseSelection from "../components/BaseSelection";
import IngredientSection from "../components/IngredientSection";
import SummaryBar from "../components/SummaryBar";

export default function Configurator() {
    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [baseIngredients, setBaseIngredients] = useState<Ingredient[]>([]);
    
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const baseType = useIngredientStore((s) => s.baseType);

    const filteredBowls = bowls.filter(b => b.base_type_id === baseType);
    const filteredCategories = categories.filter(c => c.base_type_id === baseType);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const [bowlsData, categoriesData, ingredientsData, baseIngredientsData] = await Promise.all([
                    getBowls("[|2]"),
                    getCategories("[1|2]"),
                    getIngredients(),
                    getBaseIngredients()
                ]);

                setBowls(bowlsData);
                setCategories(categoriesData);
                setIngredients(ingredientsData);
                setBaseIngredients(baseIngredientsData);
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
    
    return(
        <div>
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch">
                <BowlSelection bowls={filteredBowls}/>

                <CenterBowl 
                    bowls={filteredBowls}
                    categories={filteredCategories}
                />
                
                {baseType === 2 ? (
                    <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg relative opacity-60 pointer-events-none">
                        <BaseSelection ingredients={baseIngredients}/>

                        <div>
                            Saatavilla vain salaateille
                        </div>
                    </div>
                ) : (
                    <BaseSelection ingredients={baseIngredients}/>
                )}
                
            </div>
            <IngredientSection 
                categories={filteredCategories}
                ingredients={ingredients}
            />

            <SummaryBar />
        </div>
    )
}