import React, { useContext, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./contexts/AuthContext";
import MainTabs from "./navigation/MainTabs";
import CustomizeScreen from "./screens/CustomizeScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import HistoryScreen from "./screens/HistoryScreen";

import {
  TouchableOpacity,
  Image,
  Modal,
  View,
  Text,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { updateProfile } from "firebase/auth";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, logout, loading } = useContext(AuthContext);
  const [profileVisible, setProfileVisible] = useState(false);

  const uploadPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      try {
        await updateProfile(user, { photoURL: result.assets[0].uri });
        Alert.alert("Success", "Profile photo updated!");
      } catch (error) {
        console.log("Upload error:", error.message);
        Alert.alert("Error", "Could not update photo.");
      }
    }
  };

  // 🔥 If loading, show nothing or splash
  if (loading) {
    return null; // Optionally show splash here
  }

  return (
    <>
      <Stack.Navigator
        initialRouteName={user ? "MainTabs" : "Login"}
        screenOptions={{
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#333",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 16,
              }}
            >
              <Image
                source={require("./assets/icon.png")}
                style={{ width: 28, height: 28, marginRight: 8 }}
              />
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
                WingsAi
              </Text>
            </View>
          ),
          headerRight: () =>
            user && (
              <TouchableOpacity
                onPress={() => setProfileVisible(true)}
                style={{ marginRight: 16 }}
              >
                <Image
                  source={
                    user?.photoURL
                      ? { uri: user.photoURL }
                      : require("./assets/images/avatar.jpg")
                  }
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: "#ccc",
                  }}
                />
              </TouchableOpacity>
            ),
        }}
      >
        {user ? (
          <>
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{
                headerShown: true,
                headerTitle: "",
              }}
            />

            <Stack.Screen
              name="Customize"
              component={CustomizeScreen}
              options={{
                title: "Customize App 🎨",
                headerLeft: () => null,
              }}
            />

            <Stack.Screen
              name="History"
              component={HistoryScreen}
              options={{
                title: "Your History 🕑",
                headerLeft: () => null,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>

      {/* Profile Modal */}
      <Modal
        visible={profileVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setProfileVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              alignItems: "center",
            }}
          >
            <Image
              source={
                user?.photoURL
                  ? { uri: user.photoURL }
                  : require("./assets/images/avatar.jpg")
              }
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                marginBottom: 12,
              }}
            />
            <Text style={{ fontSize: 16, marginBottom: 8 }}>{user?.email}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FF6FD8",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 8,
                marginBottom: 10,
              }}
              onPress={() => {
                logout();
                setProfileVisible(false);
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={uploadPhoto}>
              <Text
                style={{
                  marginTop: 4,
                  color: "#FF6FD8",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Upload Photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
