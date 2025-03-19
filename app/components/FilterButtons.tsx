import { View, Text, Pressable, StyleSheet } from "react-native";
import { FilterOption, FILTER_OPTIONS, FilterButtonsProps, FilterButtonProps } from "../types";
import { COLORS, FONT_SIZES, BORDER_RADIUS, SPACING, SHADOWS } from "../constants/theme";

export function FilterButtons({ activeFilters, onToggleFilter }: FilterButtonsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {FILTER_OPTIONS.slice(0, 3).map((filter) => (
          <FilterButton
            key={filter.id}
            filter={filter}
            isActive={activeFilters.includes(filter.id)}
            onToggle={onToggleFilter}
          />
        ))}
      </View>
      <View style={styles.row}>
        {FILTER_OPTIONS.slice(3).map((filter) => (
          <FilterButton
            key={filter.id}
            filter={filter}
            isActive={activeFilters.includes(filter.id)}
            onToggle={onToggleFilter}
          />
        ))}
      </View>
    </View>
  );
}

function FilterButton({ filter, isActive, onToggle }: FilterButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isActive && styles.buttonActive,
        pressed && styles.buttonPressed,
      ]}
      onPress={() => onToggle(filter.id)}
    >
      <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
        {filter.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.md,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  button: {
    backgroundColor: COLORS.buttonBackground,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    minWidth: '30%',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  buttonActive: {
    backgroundColor: COLORS.pokemonBlue,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
    color: COLORS.text,
  },
  buttonTextActive: {
    color: COLORS.white,
  },
});