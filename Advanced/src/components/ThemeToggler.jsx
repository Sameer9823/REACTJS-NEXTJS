import React, { createContext, useContext, useState } from "react";

const TheamContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
  return (
    <TheamContext.Provider value={value}>{children}</TheamContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(TheamContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeToggleButton() {
  const { toggleTheme, isDark, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
        isDark ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1
        left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? "🌕" : "🔆"}
      </div>
    </button>
  );
}

function ThemedCard({ title, children }) {
  const { theme, isDark } = useTheme();
  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function ThemeToggler() {
  const { isDark } = useTheme();

  return (
    
      <section className="p-8 bg-white rounded-xl shadow-lg">
        <div className="mb-6">
          <ThemeToggleButton />
        </div>
        <ThemedCard title="Themed Card">
          <h2 className="text-2xl font-bold mb-6">Theme Toggler Example</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            incidunt fugiat commodi. Fugiat, quidem atque.
          </p>
          This is a card that adapts to the current theme.
        </ThemedCard>
      </section>
   
  );
}

export default ThemeToggler;
