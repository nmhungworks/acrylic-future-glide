
import { useTheme } from "../ThemeProvider";
import { 
  DarkMode as DarkModeIcon, 
  LightMode as LightModeIcon 
} from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";

interface ThemeToggleProps {
  mobile?: boolean;
}

const ThemeToggle = ({ mobile = false }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (mobile) {
    return (
      <Button
        fullWidth
        startIcon={theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        onClick={toggleTheme}
        sx={{ justifyContent: 'flex-start' }}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    );
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
