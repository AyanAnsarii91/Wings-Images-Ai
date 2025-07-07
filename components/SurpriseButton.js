import React from "react";
// import {  TouchableOpacity} from "react-native";
import { TouchableOpacity, Text } from "react-native";

import styles from "../styles/SurpriseButtonStyles";

const surprisePrompts = [
  "A futuristic flying car",
  "A cyberpunk city at night",
  "A cute baby dragon",
  "An astronaut playing guitar on Mars",
  "An AI robot painting a portrait",
  "A magical enchanted forest",
  "A steampunk airship in the sky",
  "A neon-lit Tokyo street",
  "An ancient temple in the jungle",
  "A hyper-realistic robot dog",
  "A surreal dreamscape",
  "A fantasy castle in the clouds",
  "A warrior princess riding a tiger",
  "A 3D render of a futuristic smartwatch",
  "An underwater alien civilization",
  "A time-traveling scientist",
  "A beautiful galaxy with colorful stars",
  "An abstract digital art piece",
  "A magical library with floating books",
  "A superhero flying through the city",
  "A futuristic motorcycle race",
  "A cozy cabin in snowy mountains",
  "A dragon soaring over the sea",
  "A mystical portal in a forest",
  "A robot gardener tending plants",
  "A pirate ship battling sea monsters",
  "A charming medieval village",
  "A futuristic smart home interior",
  "An ancient wizard casting spells",
  "A UFO landing in a field",
  "A stunning sunrise on another planet",
  "A Viking warrior in battle",
  "An enchanted treehouse",
  "A space station orbiting Earth",
  "A giant mech robot in battle",
  "A colorful festival with fireworks",
  "A sleek sports car concept",
  "A futuristic fashion design",
  "A magical creature in the forest",
  "A 3D render of a gemstone",
  "A breathtaking mountain landscape",
  "An alien marketplace on Mars",
  "A mystical moonlit night",
  "A futuristic drone delivery system",
  "A cute robot helping humans",
  "A holographic user interface",
  "A post-apocalyptic survivor",
  "A fantasy map of an imaginary world",
];

export default function SurpriseButton({ setPrompt, loading }) {
  const handleSurprise = () => {
    const randomPrompt =
      surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
    setPrompt(randomPrompt);
  };

  return (
    <TouchableOpacity
      style={[styles.button, loading && styles.buttonDisabled]}
      onPress={handleSurprise}
      activeOpacity={0.8}
      disabled={loading}
    >
      <Text style={styles.buttonText}>🎲 Surprise Me!</Text>
    </TouchableOpacity>
  );
}
