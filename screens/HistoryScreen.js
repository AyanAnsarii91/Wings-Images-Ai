import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/HistoryListStyles";

export default function HistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem("imageHistory");
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error("Error loading history:", error);
    }
  };

  const handleClearHistory = async () => {
    try {
      await AsyncStorage.removeItem("imageHistory");
      setHistory([]);
      Alert.alert("Success", "History cleared!");
    } catch (err) {
      console.error("Failed to clear history:", err);
    }
  };

  return (
    <View style={[styles.container, { flex: 1, padding: 16 }]}>
      <Text style={styles.title}>🕑 Your History</Text>

      {history.length === 0 ? (
        <Text style={styles.emptyText}>No history yet. Generate an image!</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {history.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <Text style={styles.historyPrompt} numberOfLines={2}>
                {item.prompt}
              </Text>
              <Text style={styles.historyTime}>
                {new Date(item.timestamp).toLocaleString()}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}

      <TouchableOpacity
        style={{
          marginTop: 16,
          backgroundColor: "red",
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={handleClearHistory}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          🗑️ Clear History
        </Text>
      </TouchableOpacity>
    </View>
  );
}
