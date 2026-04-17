const Base_url = "https://fresse-api.onrender.com/api";

export async function getBowls() {
    const response = await fetch(`${Base_url}/bowls?type_id=[1|2]`)
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return response.json();
}

export async function getCategories() {
    const response = await fetch(`${Base_url}/categories?type_id=[|2]`)
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return response.json();
}

export async function getIngredients() {
    const response = await fetch(`${Base_url}/baseingredients`)
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return response.json();
}