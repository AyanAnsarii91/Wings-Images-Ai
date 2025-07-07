import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import AuthStyles from "../../styles/AuthStyles";
import { Feather } from "@expo/vector-icons"; // for eye icon

export default function SignupScreen({ navigation }) {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const success = await signup(email, password);
    if (success) {
      Alert.alert("Success", "Account created!");
    } else {
      Alert.alert("Signup Failed", "Could not create account");
    }
  };

  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.title}>Signup</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#757575"
        style={AuthStyles.input}
      />

      <View style={{ width: "100%", maxWidth: 400, position: "relative" }}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={AuthStyles.input}
          placeholderTextColor="#757575"
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

      <View style={{ width: "100%", maxWidth: 400, position: "relative" }}>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          style={AuthStyles.input}
          placeholderTextColor="#757575"
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 16,
            top: 20,
          }}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Feather
            name={showConfirmPassword ? "eye" : "eye-off"}
            size={20}
            color="#757575"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={AuthStyles.button} onPress={handleSignup}>
        <Text style={AuthStyles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={AuthStyles.accountLinkContainer}
        activeOpacity={0.7}
      >
        <Text style={AuthStyles.accountLinkText}>
          Already have an account?{" "}
          <Text style={AuthStyles.accountLinkButton}>
            Login
            <View style={AuthStyles.accountLinkUnderline} />
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
