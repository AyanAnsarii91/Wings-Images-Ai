import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;
const isSmallDevice = width < 375;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: isTablet ? width * 0.1 : 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#0F172A', // Dark blue background
  },
  title: {
    fontSize: isTablet ? 32 : 28,
    fontWeight: '800',
    marginBottom: 24,
    color: '#E2E8F0',
    textAlign: 'center',
    letterSpacing: 0.8,
    textShadowColor: 'rgba(100, 200, 255, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  emptyText: {
    fontSize: isSmallDevice ? 15 : 17,
    color: '#94A3B8',
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(100, 200, 255, 0.1)',
    marginHorizontal: 4,
    lineHeight: 24,
    overflow: 'hidden',
  },
  historyItem: {
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 20,
    padding: isTablet ? 24 : 20,
    marginBottom: 16,
    width: isTablet ? '48%' : '100%',
    borderWidth: 1,
    borderColor: 'rgba(100, 200, 255, 0.15)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    alignSelf: 'center',
  },
  historyPrompt: {
    fontSize: isTablet ? 18 : 16,
    fontWeight: '600',
    color: '#F8FAFC',
    marginBottom: 12,
    lineHeight: 24,
  },
  historyTime: {
    fontSize: isTablet ? 14 : 13,
    color: '#94A3B8',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  clearButton: {
    marginTop: 24,
    backgroundColor: '#EF4444',
    paddingVertical: isTablet ? 18 : 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.2)',
    flexDirection: 'row',
    minHeight: 56,
  },
  clearButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: isTablet ? 18 : 16,
    letterSpacing: 0.5,
    marginLeft: 8,
  },
  historyList: {
    flexDirection: isTablet ? 'row' : 'column',
    flexWrap: isTablet ? 'wrap' : 'nowrap',
    justifyContent: isTablet ? 'space-between' : 'center',
    paddingBottom: 24,
  },
});

// Animation styles (to be used with Animated API)
export const animatedStyles = {
  buttonPress: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
  itemPress: {
    transform: [{ scale: 0.98 }],
    borderColor: 'rgba(100, 200, 255, 0.3)',
  },
  listEntrance: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
  listInitial: {
    opacity: 0,
    transform: [{ translateY: 20 }],
  }
};