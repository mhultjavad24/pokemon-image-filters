import { View, StyleSheet } from "react-native";
import { PokemonDisplay } from "./components/PokemonDisplay";
import { GoButton } from "./components/GoButton";
import { usePokemon } from "./hooks/usePokemon";

export default function Index() {
  const { pokemon, isLoading, opacity, fetchNewPokemon } = usePokemon();

  return (
    <View style={styles.container}>
      <View style={styles.pokemonContainer}>
        {!isLoading && pokemon && (
          <PokemonDisplay 
            pokemon={pokemon} 
            opacity={opacity} 
          />
        )}
      </View>
      
      <GoButton onPress={fetchNewPokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  pokemonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
