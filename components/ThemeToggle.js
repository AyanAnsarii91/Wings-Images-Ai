import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/ThemeToggleStyles";
import { SettingsContext } from "../contexts/SettingsContext";

export default function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(SettingsContext);

  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={() => setIsDarkMode(!isDarkMode)}
      activeOpacity={0.8}
    >
      <Text style={styles.iconText}>
        {isDarkMode ? "☀️" : "🌙"}
      </Text>
    </TouchableOpacity>
  );
}
