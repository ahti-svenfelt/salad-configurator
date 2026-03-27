const Base_url = "https://fresse-api.onrender.com/api";

export async function getBowls() {
    const response = await fetch(`${Base_url}/bowls`)
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return response.json();
}

export async function getCategories() {
    const response = await fetch(`${Base_url}/categories`)
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return response.json();
}

export async function getIngredients() {
    const response = await fetch(`${Base_url}/ingredients`)
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return response.json();
}