import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  image: {
    width: width - 40,
    height: width - 40,
    maxWidth: 350,
    maxHeight: 350,
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "rgba(0, 194, 255, 0.2)",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 16,
  },
});
