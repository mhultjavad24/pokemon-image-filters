import { View, Text, Pressable, StyleSheet } from "react-native";

export interface FilterOption {
  id: string;
  label: string;
  filterValue: string;
}

interface FilterButtonsProps {
  activeFilters: string[];
  onToggleFilter: (filterId: string) => void;
}

export const FILTER_OPTIONS: FilterOption[] = [
  { id: 'grayscale', label: 'Grayscale', filterValue: 'grayscale(1)' },
  { id: 'sepia', label: 'Sepia', filterValue: 'sepia(1)' },
  { id: 'invert', label: 'Invert', filterValue: 'invert(1)' },
  { id: 'blur', label: 'Blur', filterValue: 'blur(2px)' },
  { id: 'contrast', label: 'High Contrast', filterValue: 'contrast(2)' },
  { id: 'hue-rotate', label: 'Color Shift', filterValue: 'hue-rotate(180deg)' },
];

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

function FilterButton({ 
  filter, 
  isActive, 
  onToggle 
}: { 
  filter: FilterOption; 
  isActive: boolean; 
  onToggle: (id: string) => void;
}) {
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
    marginVertical: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    minWidth: '30%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  buttonActive: {
    backgroundColor: '#3B4CCA', // Pokemon blue
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  buttonTextActive: {
    color: 'white',
  },
});