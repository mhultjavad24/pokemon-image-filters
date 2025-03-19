import { Pressable, Text, StyleSheet } from "react-native";

interface GoButtonProps {
  onPress: () => void;
}

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
    marginBottom: 40,
    backgroundColor: "#FF5350", // Pokemon red
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: "#D73E3A",
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
}); 