import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import AuthStyles from "../../styles/AuthStyles";
import { Feather } from "@expo/vector-icons"; // for eye icon

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      // Optionally, you can navigate to Home or show a success toast
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  };

  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#757575"
        value={email}
        onChangeText={setEmail}
        style={AuthStyles.input}
      />

      <View style={{ width: "100%", maxWidth: 400, position: "relative" }}>
        <TextInput
          placeholder="Password"
          value={password}
          placeholderTextColor="#757575"
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={AuthStyles.input}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 16,
            top: 20,
          }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#757575"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={AuthStyles.button} onPress={handleLogin}>
        <Text style={AuthStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={AuthStyles.accountLinkContainer}
        activeOpacity={0.7}
      >
        <Text style={AuthStyles.accountLinkText}>
          Don't have an account?{" "}
          <Text style={AuthStyles.accountLinkButton}>
            Signup
            <View style={AuthStyles.accountLinkUnderline} />
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
