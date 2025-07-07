import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;
const isSmallDevice = width < 375;

export default StyleSheet.create({
  button: {
    backgroundColor: "#8B5CF6",
    paddingVertical: isTablet ? 20 : 16,
    paddingHorizontal: isTablet ? 40 : 32,
    borderRadius: 20,
    marginTop: 24,
    marginHorizontal: isSmallDevice ? 16 : 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: Platform.OS === "android" ? 12 : 0,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    minWidth: isTablet ? "50%" : "80%",
    alignSelf: "center",
    flexDirection: "row",
    overflow: "hidden",
    position: "relative",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: isTablet ? 20 : 18,
    fontWeight: "700",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    zIndex: 2,
  },
  buttonIcon: {
    marginRight: 12,
    zIndex: 2,
  },
  buttonOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    zIndex: 1,
  },
});

// Animation styles
export const animatedStyles = {
  pressIn: {
    transform: [{ scale: 0.96 }],
    shadowOpacity: 0.2,
  },
  pressOut: {
    transform: [{ scale: 1 }],
    shadowOpacity: 0.3,
  },
  ripple: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 1000,
    transform: [{ scale: 0 }],
  },
  loading: {
    transform: [{ rotate: "0deg" }],
  },
  loadingActive: {
    transform: [{ rotate: "360deg" }],
  },
};
