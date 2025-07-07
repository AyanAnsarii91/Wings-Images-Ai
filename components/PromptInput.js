import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import styles from "../styles/PromptInputStyles";

export default function PromptInput({
  prompt,
  setPrompt,
  onGenerate,
  loading,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Describe your image idea here... ✨"
        value={prompt}
        onChangeText={setPrompt}
        editable={!loading}
        multiline
        numberOfLines={5} // You can increase if needed
        textAlignVertical="top"
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={onGenerate}
        disabled={loading}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>🎨 Generate Image</Text>
      </TouchableOpacity>
    </View>
  );
}
