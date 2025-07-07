// components/GeneratedImage.js
import React from "react";
import { Image } from "react-native";
import styles from "../styles/GeneratedImageStyles";

export default function GeneratedImage({ imageUri }) {
  return <Image source={{ uri: imageUri }} style={styles.image} />;
}
