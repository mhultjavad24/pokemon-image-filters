import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Pokemon } from "../types";
import { FilterOption } from "./FilterButtons";

interface PokemonDisplayProps {
  pokemon: Pokemon;
  opacity: any;
  activeFilters: FilterOption[];
}

export function PokemonDisplay({ pokemon, opacity, activeFilters }: PokemonDisplayProps) {
  const { height, width } = Dimensions.get("window");
  const maxImageHeight = height * 0.6;
  const maxImageWidth = width * 0.8;
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // Build CSS filter string from active filters
  const filterString = activeFilters
    .map(filter => filter.filterValue)
    .join(" ");

  return (
    <Animated.View style={[styles.imageWrapper, animatedStyles]}>
      <Image
        source={{ uri: pokemon.image }}
        style={[
          styles.pokemonImage,
          {
            maxHeight: maxImageHeight,
            maxWidth: maxImageWidth,
            filter: filterString || undefined,
          }
        ]}
        contentFit="contain"
        transition={300}
      />
      <Text style={styles.pokemonName}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonImage: {
    width: "100%",
    aspectRatio: 1,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
    textTransform: "capitalize",
  },
});