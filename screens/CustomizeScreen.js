// screens/CustomizeScreen.js
import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, Switch } from "react-native";
import { SettingsContext } from "../contexts/SettingsContext";
import CustomizeScreenStyle from "../styles/CustomizeScreenStyle";

export default function CustomizeScreen() {
  const {
    isDarkMode,
    setIsDarkMode,
    gradientColors,
    setGradientColors,
    appTitle,
    setAppTitle,
    animationSpeed,
    setAnimationSpeed,
  } = useContext(SettingsContext);

  const [color1, setColor1] = useState(gradientColors[0]);
  const [color2, setColor2] = useState(gradientColors[1]);

  return (
    <View style={CustomizeScreenStyle.container}>
      <Text style={CustomizeScreenStyle.heading}>Customize Your App 🎨</Text>

      <Text style={CustomizeScreenStyle.label}>App Title:</Text>
      <TextInput
        value={appTitle}
        onChangeText={setAppTitle}
        style={CustomizeScreenStyle.input}
      />

      <Text style={CustomizeScreenStyle.label}>Primary Gradient Color:</Text>
      <TextInput
        value={color1}
        onChangeText={setColor1}
        placeholder="#FF6FD8"
        style={CustomizeScreenStyle.input}
      />

      <Text style={CustomizeScreenStyle.label}>Secondary Gradient Color:</Text>
      <TextInput
        value={color2}
        onChangeText={setColor2}
        placeholder="#3813C2"
        style={CustomizeScreenStyle.input}
      />

      <Button
        title="Save Gradient Colors"
        onPress={() => setGradientColors([color1, color2])}
        style={CustomizeScreenStyle.button}
      />

      <View style={CustomizeScreenStyle.row}>
        <Text style={{ marginRight: 8 }}>Dark Mode:</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <Text style={CustomizeScreenStyle.label}>Animation Speed (ms):</Text>
      <TextInput
        value={animationSpeed.toString()}
        onChangeText={(val) => setAnimationSpeed(parseInt(val) || 2000)}
        keyboardType="numeric"
        style={CustomizeScreenStyle.animationInput}
      />
    </View>
  );
}
