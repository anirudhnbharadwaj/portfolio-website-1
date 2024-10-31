'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

// Define the context state interface
interface ThemeContextType {
  isDarkMode: boolean;
  toggle: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

// Initial state for the context
const initialState: ThemeContextType = {
  isDarkMode: true, // Default to true for dark mode
  toggle: () => {},
  enableDarkMode: () => {},
  disableDarkMode: () => {},
};

// Create the context
const ThemeContext = createContext<ThemeContextType>(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize state based on localStorage or default to true for dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check if in the browser and read from localStorage
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem('darkMode');
      return storedPreference ? JSON.parse(storedPreference) : true; // Default to true if no preference is set
    }
    return true; // Default to true on the server
  });

  // Toggle function to switch modes
  const toggle = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  // Function to enable dark mode
  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  // Function to disable dark mode
  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
  }, []);

  // Effect to synchronize localStorage and document class
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Provide context value to children
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
        enableDarkMode,
        disableDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
