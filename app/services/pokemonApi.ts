import { Pokemon } from "../types";

export const MAX_POKEMON_ID = 1010;

export class PokemonService {
  private static readonly BASE_URL = 'https://pokeapi.co/api/v2';

  static async fetchPokemonById(id: number): Promise<Pokemon> {
    try {
      if (id < 1 || id > MAX_POKEMON_ID) {
        throw new Error(`Pokemon ID must be between 1 and ${MAX_POKEMON_ID}`);
      }
      
      const response = await fetch(`${this.BASE_URL}/pokemon/${id}`);
      
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

  static async fetchRandomPokemon(): Promise<Pokemon> {
    const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
    return this.fetchPokemonById(randomId);
  }
}

export async function fetchRandomPokemon(): Promise<Pokemon> {
  return PokemonService.fetchRandomPokemon();
}