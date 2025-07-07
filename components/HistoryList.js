import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/HistoryListStyles";

// export default function HistoryList({ historyUpdated }) {
export default function HistoryList({ historyUpdated, onSelectPrompt }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, [historyUpdated]);

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
      setHistory([]); // 👈 add this line
      Alert.alert("Success", "History cleared!");
    } catch (err) {
      console.error("Failed to clear history:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕑 Your History</Text>
      {history.length === 0 ? (
        <Text style={styles.emptyText}>No history yet. Generate an image!</Text>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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

      {history.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.historyItem}
          onPress={() => onSelectPrompt(item.prompt)}
        >
          <Text style={styles.historyPrompt} numberOfLines={2}>
            {item.prompt}
          </Text>
          <Text style={styles.historyTime}>
            {new Date(item.timestamp).toLocaleString()}
          </Text>
        </TouchableOpacity>
      ))}

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
