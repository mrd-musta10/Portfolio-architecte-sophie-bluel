// assets/js/api.js
const API_URL = "http://localhost:5678/api";

export async function fetchWorks() {
    try {
        const response = await fetch(`${API_URL}/works`);
        return await response.json();
    } catch (error) {
        console.error("Erreur fetch works:", error);
        return [];
    }
}

export async function fetchCategories() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        return await response.json();
    } catch (error) {
        console.error("Erreur fetch categories:", error);
        return [];
    }
}