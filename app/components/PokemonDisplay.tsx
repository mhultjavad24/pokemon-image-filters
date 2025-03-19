import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { Image } from "expo-image";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { PokemonDisplayProps } from "../types";
import { FilterService } from "../services/filterService";
import { COLORS, FONT_SIZES, SPACING } from "../constants/theme";

export function PokemonDisplay({ pokemon, opacity, activeFilters }: PokemonDisplayProps) {
  const { height, width } = Dimensions.get("window");
  const maxImageHeight = height * 0.6;
  const maxImageWidth = width * 0.8;
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  
  const filterString = FilterService.generateFilterString(activeFilters);
    
  return (
    <Animated.View style={[styles.imageWrapper, animatedStyles]}>
      <Image
        source={{ uri: pokemon.image }}
        style={[
          styles.pokemonImage,
          {
            maxHeight: maxImageHeight,
            maxWidth: maxImageWidth,
            ...(Platform.OS === 'web' ? { filter: filterString || undefined } : {}),
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
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    marginTop: SPACING.lg,
    color: COLORS.text,
    textTransform: "capitalize",
  },
});