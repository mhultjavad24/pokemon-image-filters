import { Pressable, Text, StyleSheet } from "react-native";
import { GoButtonProps } from "../types";
import { COLORS, FONT_SIZES, BORDER_RADIUS, SPACING, SHADOWS } from "../constants/theme";

export function GoButton({ onPress }: GoButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Go!</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: SPACING.xxl,
    backgroundColor: COLORS.pokemonRed,
    paddingHorizontal: SPACING.xxl,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.xl,
    ...SHADOWS.medium,
  },
  buttonPressed: {
    backgroundColor: COLORS.pokemonRedDark,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
    fontWeight: "bold",
  },
});