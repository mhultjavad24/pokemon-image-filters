import { Pokemon } from "../types";

export const MAX_POKEMON_ID = 1010;

export async function fetchRandomPokemon(): Promise<Pokemon> {
  try {
    const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
    };
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    throw error;
  }
} 