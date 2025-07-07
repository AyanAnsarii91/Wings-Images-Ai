import React from "react";
import { Button, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export default function ShareButton({ imageUri }) {
  const handleShare = async () => {
    try {
      const base64Data = imageUri.replace(/^data:image\/\w+;base64,/, "");
      const fileUri = FileSystem.cacheDirectory + "shared-image.jpg";

      await FileSystem.writeAsStringAsync(fileUri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const canShare = await Sharing.isAvailableAsync();
      if (!canShare) {
        Alert.alert("Error", "Sharing not available on this device");
        return;
      }

      await Sharing.shareAsync(fileUri, {
        mimeType: "image/jpeg",
        dialogTitle: "Share your AI Image",
      });

    } catch (err) {
      Alert.alert("Error", err.message);
      console.error(err);
    }
  };

  return <Button title="Share Image" onPress={handleShare} />;
}
