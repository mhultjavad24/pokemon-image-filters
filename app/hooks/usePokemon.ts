import { useState, useEffect } from "react";
import { Pokemon } from "../types";
import { fetchRandomPokemon } from "../services/pokemonApi";
import { useImageAnimation } from "./useImageAnimation";

interface UsePokemonReturn {
  pokemon: Pokemon | null;
  isLoading: boolean;
  opacity: any;
  fetchNewPokemon: () => Promise<void>;
}

export function usePokemon(): UsePokemonReturn {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { opacity, fadeIn, fadeOut } = useImageAnimation();
  
  const fetchNewPokemon = async () => {
    try {
      if (pokemon) {
        await fadeOut();
      }
      
      setIsLoading(true);
      
      const newPokemon = await fetchRandomPokemon();
      setPokemon(newPokemon);
      
      setIsLoading(false);
      
      fadeIn();
    } catch (error) {
      console.error("Failed to fetch Pokemon:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewPokemon();
  }, []);

  return {
    pokemon,
    isLoading,
    opacity,
    fetchNewPokemon,
  };
}