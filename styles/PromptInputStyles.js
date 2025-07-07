import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 24,
    paddingHorizontal: 10,  // Reduced padding to shift left
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(71, 85, 105, 0.3)",
    backgroundColor: "transparent", // Remove grey background
    shadowColor: "transparent",     // Remove outer shadow
    // marginHorizontal: 1,  // Reduced margin to shift left
    paddingVertical: 16,
  },
  input: {
    width: "100%",
    minHeight: 140,
    borderWidth: 1,
    borderColor: "rgba(71, 85, 105, 0.4)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "rgba(15, 23, 42, 0.95)",  // Keep input dark
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: "top",
    color: "#E2E8F0",
    fontWeight: "500",
  },
  inputFocused: {
    borderColor: "#00C2FF",
    backgroundColor: "rgba(15, 23, 42, 1)",
    shadowColor: "#00C2FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  button: {
    backgroundColor: "#00C2FF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00C2FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(0, 194, 255, 0.2)",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  buttonDisabled: {
    backgroundColor: "rgba(0, 194, 255, 0.4)",
    shadowOpacity: 0.1,
    elevation: 2,
  },
  helperText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 8,
    marginLeft: 8,
    fontWeight: "500",
  },

  buttonRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginTop: 12,
},

micButton: {
  flex: 1,
  backgroundColor: "#03DAC6",
  paddingVertical: 14,
  marginRight: 8,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
},

micButtonActive: {
  backgroundColor: "#018786",
},


});
