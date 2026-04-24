import { Link } from "react-router-dom";
import { useIngredientStore } from "../store/useIngredientStore";
import { calculateTotalWeight } from "../utils/calculations";
import { usePriceStore } from "../store/usePriceStore";

export default function SummaryBar() {
  const slots = useIngredientStore((s) => s.slots);
  const removeIngredient = useIngredientStore((s) => s.removeIngredient);
  const prices = usePriceStore((s) => s.prices);

  const activeIngredients = Object.values(slots).filter((i) => i !== null);

  const totalWeight = calculateTotalWeight(activeIngredients);

  const totalPrice = activeIngredients.reduce((sum, item) => {
    const priceEntry = prices.find((p) => p.item_id === item!.id);
    return sum + (priceEntry ? priceEntry.price : 0);
  }, 0);

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">
      <div className="flex-1 bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
        <h2 className="text-xl font-bold mb-4">
          Items: {activeIngredients.length}
        </h2>

        <div className="flex flex-wrap gap-3">
          {activeIngredients.map((item) => (
            <div
              key={item!.id}
              className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full shadow"
            >
              <span>{item!.name}</span>

              <button
                className="text-red-600 font-bold"
                onClick={() => removeIngredient(item!.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        
        <Link to="/print">
          <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
            Print
          </div>
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
          Arvioitu paino: {totalWeight} g
        </div>

        <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
          Hinta: {totalPrice} €
        </div>
      </div>
    </div>
  );
}