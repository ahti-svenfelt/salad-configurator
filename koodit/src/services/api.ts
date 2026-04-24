const Base_url = "https://fresse-api.onrender.com/api";

export async function login(email: string, password: string) {
    const response = await fetch(`${Base_url}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if(!response.ok) {
        throw new Error("Invalid credentials");
    }

    return response.json();
}

export async function getPrices(token: string) {
    const response = await fetch(`${Base_url}/prices`, {
        headers: { "Authorization": `Bearer ${token}`},
    });

    if(!response.ok) {
        throw new Error("Failed to fetch prices");
    }

    return response.json();
}

export async function SaveRecipe(token: string, recipeData: any) {
    const response = await fetch(`${Base_url}/recipes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(recipeData),
    });

    if(!response.ok) {
        throw new Error("Failed to save recipe");
    }

    return response.json();
}

export async function getBowls(id: string) {
    const response = await fetch(`${Base_url}/bowls?type_id=${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    return response.json();
}

export async function getCategories(id: string) {
    const response = await fetch(`${Base_url}/categories?type_id=${id}`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    return response.json();
}

export async function getBaseIngredients() {
    const response = await fetch(`${Base_url}/baseingredients`);

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    return response.json();
}

export async function getIngredients() {
    const response = await fetch(`${Base_url}/ingredients`);

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    return response.json();
}