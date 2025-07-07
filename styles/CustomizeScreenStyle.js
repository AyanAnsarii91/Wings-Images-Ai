import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 600;
const isSmallDevice = width < 375;

const CustomizeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: isTablet ? width * 0.1 : 24,
    paddingVertical: 24,
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: isTablet ? 32 : 28,
    fontWeight: "800",
    marginBottom: 24,
    color: "#2d3436",
    letterSpacing: -0.5,
    textAlign: "center",
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: "600",
    color: "#636e72",
  },
  input: {
    borderColor: "#dfe6e9",
    borderWidth: 1.5,
    padding: Platform.OS === "ios" ? 14 : 12,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
    height: 50,
    justifyContent: "center",
    backgroundColor: "#0984e3",
    shadowColor: "#0984e3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  animationInput: {
    borderColor: "#dfe6e9",
    borderWidth: 1.5,
    padding: Platform.OS === "ios" ? 14 : 12,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  switch: {
    transform: Platform.OS === "ios" ? [{ scaleX: 0.8 }, { scaleY: 0.8 }] : [],
  },
});

// Animation styles (to be used with Animated API)
export const animatedStyles = {
  buttonPress: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },
  inputFocus: {
    borderColor: "#74b9ff",
    shadowColor: "#74b9ff",
    shadowOpacity: 0.3,
  },
};

export default CustomizeScreenStyle;
