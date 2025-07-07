import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainHomeScreen from "../screens/MainHomeScreen";
import ExploreFeedScreen from "../screens/ExploreFeedScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FF6FD8",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "ExploreFeed") {
            iconName = "images-outline"; // 🎨 Beautiful image album icon
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#fff" },
      })}
    >
      <Tab.Screen name="Home" component={MainHomeScreen} />
      <Tab.Screen
        name="ExploreFeed"
        component={ExploreFeedScreen}
        options={{ title: "Explore Feed" }}
      />
    </Tab.Navigator>
  );
}
