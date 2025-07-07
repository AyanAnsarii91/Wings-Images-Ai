import { StyleSheet } from "react-native";

export default StyleSheet.create({
  iconButton: {
    position: "absolute",
    top: 5,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6366F1",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#6366F1",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 2,
    borderColor: "rgba(99, 102, 241, 0.2)",
    zIndex: 10,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
  },
});