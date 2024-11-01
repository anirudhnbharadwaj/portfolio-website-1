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
  isDarkMode: boolean | undefined; // Allow isDarkMode to be undefined
  toggle: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

// Initial state for the context
const initialState: ThemeContextType = {
  isDarkMode: undefined, // Set initial state to undefined
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
  // Initialize state based on localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined); // Start as undefined

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem('darkMode');
      // If there's a stored preference, set isDarkMode; otherwise, check system preference
      if (storedPreference) {
        setIsDarkMode(JSON.parse(storedPreference));
      } else {
        // Fallback to system preference
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }
  }, []);

  // Toggle function to switch modes
  const toggle = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save new preference
      return newMode;
    });
  }, []);

  // Function to enable dark mode
  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
    localStorage.setItem('darkMode', 'true'); // Save preference
  }, []);

  // Function to disable dark mode
  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
    localStorage.setItem('darkMode', 'false'); // Save preference
  }, []);

  // Effect to synchronize document class based on isDarkMode state
  useEffect(() => {
    if (isDarkMode !== undefined) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
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






/*  Try this Code:
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
  isDarkMode: boolean | undefined; // Allow isDarkMode to be undefined
  toggle: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

// Initial state for the context
const initialState: ThemeContextType = {
  isDarkMode: undefined, // Set initial state to undefined
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
  // Initialize state based on localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined); // Start as undefined

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedPreference = localStorage.getItem('darkMode');
      
      if (systemPrefersDark) {
        setIsDarkMode(true); // Prefer system dark mode
      } else if (storedPreference) {
        setIsDarkMode(JSON.parse(storedPreference)); // Fallback to stored preference
      } else {
        setIsDarkMode(undefined); // Keep as undefined if no preference found
      }
    }
  }, []);

  // Toggle function to switch modes
  const toggle = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save new preference
      return newMode;
    });
  }, []);

  // Function to enable dark mode
  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
    localStorage.setItem('darkMode', 'true'); // Save preference
  }, []);

  // Function to disable dark mode
  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
    localStorage.setItem('darkMode', 'false'); // Save preference
  }, []);

  // Effect to synchronize document class based on isDarkMode state
  useEffect(() => {
    if (isDarkMode !== undefined) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
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
*/