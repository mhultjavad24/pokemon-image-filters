import { View, StyleSheet } from "react-native";
import { PokemonDisplay } from "./components/PokemonDisplay";
import { GoButton } from "./components/GoButton";
import { FilterButtons, FILTER_OPTIONS } from "./components/FilterButtons";
import { usePokemon } from "./hooks/usePokemon";
import { useState, useMemo } from "react";

export default function Index() {
  const { pokemon, isLoading, opacity, fetchNewPokemon } = usePokemon();
  const [activeFilterIds, setActiveFilterIds] = useState<string[]>([]);

  // Find active filter objects based on their IDs
  const activeFilters = useMemo(() => {
    return FILTER_OPTIONS.filter(filter => activeFilterIds.includes(filter.id));
  }, [activeFilterIds]);

  // Toggle a filter on/off
  const handleToggleFilter = (filterId: string) => {
    setActiveFilterIds(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pokemonContainer}>
        {!isLoading && pokemon && (
          <PokemonDisplay 
            pokemon={pokemon} 
            opacity={opacity} 
            activeFilters={activeFilters}
          />
        )}
      </View>
      
      <View style={styles.controlsContainer}>
        <GoButton onPress={fetchNewPokemon} />
        <FilterButtons 
          activeFilters={activeFilterIds}
          onToggleFilter={handleToggleFilter}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  pokemonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  controlsContainer: {
    width: "100%",
    alignItems: "center",
  },
});
