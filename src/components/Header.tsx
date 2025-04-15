
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { 
  Menu as MenuIcon, 
  Close as CloseIcon, 
  ChatBubble as ChatBubbleIcon, 
  Language as LanguageIcon, 
  DarkMode as DarkModeIcon, 
  LightMode as LightModeIcon, 
  KeyboardArrowDown
} from "@mui/icons-material";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";

const services = [
  { name: "AI Text Generation", href: "#text-generation" },
  { name: "Image Synthesis", href: "#image-synthesis" },
  { name: "Data Analytics", href: "#data-analytics" },
  { name: "Voice Recognition", href: "#voice-recognition" },
  { name: "Video Processing", href: "#video-processing" },
  { name: "Predictive Modeling", href: "#predictive-modeling" }
];

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
  { name: "Français", code: "fr" },
  { name: "Deutsch", code: "de" },
  { name: "中文", code: "zh" }
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  
  // State for dropdown menus
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageSelect = (language: string) => {
    setCurrentLanguage(language);
    handleLanguageClose();
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ width: '32px', height: '32px', marginRight: '8px' }}>
              <path fill="#00a3ff" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28A5 5 0 0 1 12 7"/>
            </svg>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Future Vision
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
            {/* Services Dropdown */}
            <Button 
              onClick={handleServicesClick}
              endIcon={<KeyboardArrowDown />}
            >
              AI Services
            </Button>
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesClose}
            >
              {services.map((service) => (
                <MenuItem key={service.name} onClick={handleServicesClose} component="a" href={service.href}>
                  {service.name}
                </MenuItem>
              ))}
            </Menu>

            {/* Contact Us */}
            <Button startIcon={<ChatBubbleIcon />}>
              Contact Us
            </Button>

            {/* Language Selector */}
            <Button 
              startIcon={<LanguageIcon />}
              endIcon={<KeyboardArrowDown />}
              onClick={handleLanguageClick}
            >
              {currentLanguage}
            </Button>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
            >
              {languages.map((language) => (
                <MenuItem 
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.name)}
                >
                  {language.name}
                </MenuItem>
              ))}
            </Menu>

            {/* Theme Toggle */}
            <IconButton onClick={toggleTheme}>
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="end"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen && window.innerWidth < 768}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            mt: '64px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            AI Services
          </Typography>
          <List>
            {services.map((service) => (
              <ListItem key={service.name} disablePadding>
                <ListItemButton
                  component="a"
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ListItemText primary={service.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Button 
            fullWidth
            startIcon={<ChatBubbleIcon />}
            sx={{ justifyContent: 'flex-start', mb: 2 }}
          >
            Contact Us
          </Button>

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Language
          </Typography>
          <List>
            {languages.map((language) => (
              <ListItem key={language.code} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setCurrentLanguage(language.name);
                    setMobileMenuOpen(false);
                  }}
                >
                  <ListItemText primary={language.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Button
            fullWidth
            startIcon={theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            onClick={toggleTheme}
            sx={{ justifyContent: 'flex-start' }}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
