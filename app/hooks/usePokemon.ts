import { useState, useEffect } from "react";
import { useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { Pokemon } from "../types";
import { fetchRandomPokemon } from "../services/pokemonApi";

interface UsePokemonReturn {
  pokemon: Pokemon | null;
  isLoading: boolean;
  opacity: any; // Reanimated shared value
  fetchNewPokemon: () => Promise<void>;
}

/**
 * Custom hook to manage Pokemon data and animations
 */
export function usePokemon(): UsePokemonReturn {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const opacity = useSharedValue(0);

  const fetchNewPokemon = async () => {
    try {
      // If we already have a Pokemon, start fade out
      if (pokemon) {
        opacity.value = withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.ease),
        });
        // Wait for fade out to complete
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      setIsLoading(true);
      
      // Fetch a new random Pokemon
      const newPokemon = await fetchRandomPokemon();
      setPokemon(newPokemon);
      
      setIsLoading(false);
      
      // Fade in the new Pokemon
      opacity.value = withTiming(1, {
        duration: 500,
        easing: Easing.in(Easing.ease),
      });
    } catch (error) {
      console.error("Failed to fetch Pokemon:", error);
      setIsLoading(false);
    }
  };

  // Fetch initial Pokemon on mount
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