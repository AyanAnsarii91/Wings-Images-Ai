import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import styles from "../styles/LoadingAnimationStyles";

export default function LoadingAnimation() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/lottie/loading.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
}
