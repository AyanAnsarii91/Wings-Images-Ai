
import { StyleSheet, Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SCALE = SCREEN_WIDTH / 375;

function normalize(size) {
  const newSize = size * SCALE;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

// Updated color palette with modern, aesthetic colors
const COLORS = {
  primary: "#6C63FF",       // Vibrant purple
  primaryDark: "#4A42D6",   // Darker purple
  background: "#F8F9FA",    // Very light gray
  surface: "#FFFFFF",       // Pure white
  accent: "#FF6584",        // Pink accent
  textPrimary: "#2D3748",   // Dark gray-blue (better than pure black)
  textSecondary: "#718096", // Medium gray
  textTertiary: "#A0AEC0",  // Light gray
  error: "#E53E3E",         // Red for errors
  success: "#38A169",       // Green for success
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: normalize(20),
    backgroundColor: COLORS.background,
  },

  // Beautiful title styling
  title: {
    fontSize: normalize(28),
    marginBottom: normalize(24),
    fontWeight: "700",
    color: COLORS.primary,  // Using primary color for title
    letterSpacing: 0.5,
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif-medium",
  },

  // Subtitle for auth screens
  subtitle: {
    fontSize: normalize(16),
    color: COLORS.textSecondary,
    marginBottom: normalize(32),
    textAlign: "center",
    paddingHorizontal: normalize(20),
    lineHeight: normalize(22),
  },

  input: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: "#E2E8F0", // Lighter border
    paddingVertical: normalize(14), // Slightly taller
    paddingHorizontal: normalize(16),
    borderRadius: normalize(10), // Softer radius
    marginBottom: normalize(16),
    fontSize: normalize(16),
    color: COLORS.textPrimary,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: normalize(16), // More vertical padding
    paddingHorizontal: normalize(24),
    borderRadius: normalize(10),
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "center",
    marginTop: normalize(8),
    ...Platform.select({
      ios: {
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  buttonText: {
    color: COLORS.surface,
    fontWeight: "600",
    fontSize: normalize(16),
    letterSpacing: 0.5,
  },

  // Beautiful "Already have an account?" text
  accountText: {
    marginTop: normalize(24),
    color: COLORS.textSecondary,
    fontSize: normalize(14),
    textAlign: "center",
  },

  // "Sign In" link in the account text
  accountLink: {
    color: COLORS.primary,
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  // Divider style
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: normalize(24),
    width: "100%",
    maxWidth: 400,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E8F0",
  },
  dividerText: {
    paddingHorizontal: normalize(10),
    color: COLORS.textSecondary,
    fontSize: normalize(12),
  },

  // Social buttons container
  socialContainer: {
    width: "100%",
    maxWidth: 400,
    marginTop: normalize(16),
    flexDirection: "row",
    justifyContent: "center", // Centered instead of space-between
    flexWrap: "wrap",
  },

  socialButton: {
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(10),
    margin: normalize(4),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },

  socialButtonText: {
    fontSize: normalize(14),
    fontWeight: "500",
    color: COLORS.textPrimary,
    marginLeft: normalize(8),
  },

  errorText: {
    color: COLORS.error,
    fontSize: normalize(14),
    marginTop: normalize(8),
    textAlign: "center",
  },

  // Loading overlay
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },

  // Add this to your AuthStyles.js
accountLinkContainer: {
  marginTop: normalize(24),
  alignItems: 'center',
},

accountLinkText: {
  fontSize: normalize(14),
  color: COLORS.textSecondary,
  fontFamily: Platform.OS === 'ios' ? 'SFProText-Regular' : 'Roboto',
},

accountLinkButton: {
  color: COLORS.primary,
  fontWeight: '600',
  textDecorationLine: 'none',
  position: 'relative',
},

// For the underline animation effect
accountLinkUnderline: {
  position: 'absolute',
  bottom: -2,
  left: 0,
  right: 0,
  height: 1,
  backgroundColor: COLORS.primary,
  transform: [{ scaleX: 0 }],
  transformOrigin: 'left',
},

});
