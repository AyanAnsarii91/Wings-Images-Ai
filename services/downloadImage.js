import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

export const downloadImage = async (imageUri) => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Storage access needed to save image");
      return;
    }

    const match = imageUri.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) {
      Alert.alert("Error", "Unexpected image format, cannot save.");
      return;
    }

    const mime = match[1];
    const base64Data = match[2];
    const extension = mime.split("/")[1];
    const filename = `AI_Image_${Date.now()}.${extension}`;
    const fileUri = FileSystem.cacheDirectory + filename;

    await FileSystem.writeAsStringAsync(fileUri, base64Data, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync("AI Images", asset, false);

    Alert.alert("Saved!", "Image has been saved to your gallery.");
  } catch (err) {
    console.error("Download failed:", err);
    Alert.alert("Download failed", err.message);
  }
};
