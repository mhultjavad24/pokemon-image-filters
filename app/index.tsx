import { View, StyleSheet } from "react-native";
import { PokemonDisplay } from "./components/PokemonDisplay";
import { GoButton } from "./components/GoButton";
import { FilterButtons } from "./components/FilterButtons";
import { usePokemon } from "./hooks/usePokemon";
import { useFilters } from "./hooks/useFilters";
import { COLORS, SPACING } from "./constants/theme";

export default function Index() {
  const { pokemon, isLoading, opacity, fetchNewPokemon } = usePokemon();
  const { activeFilterIds, activeFilters, toggleFilter } = useFilters();

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
            onToggleFilter={toggleFilter}
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
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
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
