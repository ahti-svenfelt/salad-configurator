import { useState } from "react";
import Modal from "./Modal";
import { useAuthStore } from "../store/useAuthStore";
import { useIngredientStore } from "../store/useIngredientStore";
import { SaveRecipe } from "../services/api";

type SaveRecipeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (recipeName: string, makePublic: boolean) => void;
    bowlId: number;
};

export default function SaveRecipeModal({ isOpen, onClose, onSave, bowlId }: SaveRecipeModalProps) {
    const [recipeName, setRecipeName] = useState("");
    const [makePublic, setMakePublic] = useState(false);

    const token = useAuthStore((s) => s.token);
    const slots = useIngredientStore((s) => s.slots);
    const clearSelection = useIngredientStore((s) => s.clearSelection);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const ingredientIds = Object.values(slots)
            .filter((i) => i !== null)
            .map((i) => i!.id);

        const recipeData = {
            name: recipeName,
            bowl_id: bowlId,
            ingredient_ids: ingredientIds,
            is_public: makePublic,
        };

        try {
            await SaveRecipe(token!, recipeData);
            alert("Recipe saved!");

            clearSelection();

            onClose();
        } catch (error) {
            console.error("Failed to save recipe:", error);
            alert("Failed to save recipe.");
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-2xl font-bold mb-4">Save Recipe</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Recipe Name</label>
                    <input 
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        className="border rounded px-3 py-2 w-full"
                        placeholder="Enter recipe name"
                        required
                    />
                </div>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={makePublic}
                        onChange={(e) => setMakePublic(e.target.checked)}
                    />
                    <span>Make Public</span>
                </label>
                
                <button
                    type="submit"
                    className="bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800"
                >
                    Save
                </button>
            </form>
        </Modal>
    );
}