import React, { useState, useContext } from "react";



import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";



import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

import { generateImage } from "../services/generateImage";
import { savePromptToHistory } from "../services/historyStorage";
import { downloadImage } from "../services/downloadImage";

import PromptInput from "../components/PromptInput";
import SurpriseButton from "../components/SurpriseButton";
import LoadingAnimation from "../components/LoadingAnimation";
import ThemeToggle from "../components/ThemeToggle";
import GeneratedImage from "../components/GeneratedImage";
import ShareButton from "../components/ShareButton";
// import { API_KEY } from "@env";
import Constants from "expo-constants";
const { API_KEY } = Constants.expoConfig.extra;

import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/AppStyle";
import { SettingsContext } from "../contexts/SettingsContext";

export default function MainHomeScreen({ navigation }) {
  const [prompt, setPrompt] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const { isDarkMode, gradientColors, appTitle } = useContext(SettingsContext);

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return null;




  const handleGenerateImage = async () => {
    if (!prompt.trim()) return Alert.alert("Error", "Please enter a prompt");

    setLoading(true);
    setImageUri(null);

    try {
      const uri = await generateImage(prompt, API_KEY);
      setImageUri(uri);

      // await saveImageToStorage(uri); // ✅ now works
      // const API_KEY = "AIzaSyB684LFFVigjga5xMErzKNEQS1kn4JP9ug";
      // const uri = await generateImage(prompt, API_KEY);

      await savePromptToHistory(prompt);
    } catch (err) {
      Alert.alert("Failed to generate image", err.message);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDarkMode ? "#121212" : "#fff" }}
    >
      
      {/* <ThemeToggle /> */}
    

      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <MaskedView
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.gradientTitle,
                  {
                    fontFamily: fontsLoaded ? "Poppins_600SemiBold" : "System",
                  },
                ]}
              >
                {appTitle}
              </Text>
            </View>
          }
        >
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ paddingVertical: 10 }}
          >
            <Text
              style={[
                styles.gradientTitle,
                {
                  fontFamily: fontsLoaded ? "Poppins_600SemiBold" : "System",
                  color: "transparent",
                },
              ]}
            >
              {appTitle}
            </Text>
          </LinearGradient>
        </MaskedView>

        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          onGenerate={handleGenerateImage}
          loading={loading}
        />
        <SurpriseButton setPrompt={setPrompt} loading={loading} />
        {loading && <LoadingAnimation />}

       

        <ScrollView
          style={{ flexGrow: 1 }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {imageUri && <GeneratedImage imageUri={imageUri} />}
          {imageUri && <ShareButton imageUri={imageUri} />}

          {imageUri && (
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={() => downloadImage(imageUri)}
              activeOpacity={0.8}
            >
              <Text style={styles.downloadButtonText}>Download Image</Text>
            </TouchableOpacity>
          )}

       
        </ScrollView>
      </View>

      {/* Button to go to History Screen */}
      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => navigation.navigate("History")}
      >
        <Text style={styles.historyButtonText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customizeButton}
        onPress={() => navigation.navigate("Customize")}
      >
        <Text style={styles.customizeButtonText}>Customize</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
