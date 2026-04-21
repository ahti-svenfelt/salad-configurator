import { useState } from "react";
import Modal from "./Modal";

type SaveRecipeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (recipeName: string, makePublic: boolean) => void;
};

export default function SaveRecipeModal({ isOpen, onClose, onSave }: SaveRecipeModalProps) {
    const [recipeName, setRecipeName] = useState("");
    const [makePublic, setMakePublic] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(recipeName, makePublic);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
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