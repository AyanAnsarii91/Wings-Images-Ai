// styles/AppStyle.js
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isSmallDevice = width < 360;
const isMediumDevice = width >= 360 && width < 414;
const isLargeDevice = width >= 414;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F23",
    minHeight: height,
  },

  appLogo: {
    width: isSmallDevice ? 64 : isMediumDevice ? 80 : 88,
    height: isSmallDevice ? 64 : isMediumDevice ? 80 : 88,
    borderRadius: 80,
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 16,
    marginLeft: 16,
    borderWidth: 3,
    borderColor: "rgba(0, 194, 255, 0.3)",
    shadowColor: "#00C2FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },

  gradientTitle: {
    fontSize: isSmallDevice ? 24 : isMediumDevice ? 30 : 36,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
    letterSpacing: 1.5,
  },

  downloadButton: {
    backgroundColor: "#10B981",
    marginTop: 16,
    marginHorizontal: 20,
    paddingVertical: isSmallDevice ? 12 : 16,
    paddingHorizontal: isSmallDevice ? 24 : 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.2)",
  },

  downloadButtonText: {
    color: "#FFFFFF",
    fontSize: isSmallDevice ? 16 : 18,
    fontWeight: "700",
    letterSpacing: 0.8,
  },

  historyButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#6A5ACD",
    paddingHorizontal: isSmallDevice ? 16 : 20,
    paddingVertical: isSmallDevice ? 10 : 12,
    borderRadius: 50,
    elevation: 5,
  },

  historyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: isSmallDevice ? 14 : 16,
  },

  customizeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FF6FD8",
    paddingHorizontal: isSmallDevice ? 16 : 20,
    paddingVertical: isSmallDevice ? 10 : 12,
    borderRadius: 50,
    elevation: 5,
  },

  customizeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: isSmallDevice ? 14 : 16,
  },

  mainView: {
    flex: 1,
    paddingHorizontal: 16,
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },

  logoutButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 40,
    left: 20,
    backgroundColor: "#EF4444",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.2)",
    zIndex: 10,
  },

  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
