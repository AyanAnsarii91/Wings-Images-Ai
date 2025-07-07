// contexts/SettingsContext.js

import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gradientColors, setGradientColors] = useState(["#FF6FD8", "#3813C2"]);
  const [appTitle, setAppTitle] = useState("Wings Images AI 🚀");
  const [animationSpeed, setAnimationSpeed] = useState(3000); // Default 3 sec

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        gradientColors,
        setGradientColors,
        appTitle,
        setAppTitle,
        animationSpeed, // 👈 ADD THIS
        setAnimationSpeed, // 👈 ADD THIS
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
