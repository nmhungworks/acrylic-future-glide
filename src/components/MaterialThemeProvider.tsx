
import { ReactNode, useState, createContext, useContext, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface MaterialThemeProviderProps {
  children: ReactNode;
}

export const MaterialThemeProvider = ({ children }: MaterialThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    // Initialize theme from localStorage if available
    const savedTheme = localStorage.getItem("theme") as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    }
  }, []);

  const themeContext = useMemo(
    () => ({
      theme: mode,
      setTheme: (newMode: ThemeMode) => {
        setMode(newMode);
        localStorage.setItem("theme", newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#00a3ff", // futureBlue
          },
          secondary: {
            main: "#6c757d",
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: mode === "dark" 
                  ? "0 4px 6px rgba(0, 0, 0, 0.3)" 
                  : "0 2px 4px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
