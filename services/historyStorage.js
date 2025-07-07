import AsyncStorage from "@react-native-async-storage/async-storage";

export const savePromptToHistory = async (prompt) => {
  try {
    const storedHistory = await AsyncStorage.getItem("imageHistory");
    const history = storedHistory ? JSON.parse(storedHistory) : [];

    const newHistory = [
      { prompt, timestamp: Date.now() },
      ...history,
    ].slice(0, 10);

    await AsyncStorage.setItem("imageHistory", JSON.stringify(newHistory));
  } catch (err) {
    console.error("Error saving to history:", err);
  }
};

export const getHistory = async () => {
  try {
    const storedHistory = await AsyncStorage.getItem("imageHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  } catch (err) {
    console.error("Error getting history:", err);
    return [];
  }
};
