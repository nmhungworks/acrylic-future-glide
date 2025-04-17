
import { useState } from "react";
import { 
  Close as CloseIcon, 
  Menu as MenuIcon,
  ChatBubble as ChatBubbleIcon
} from "@mui/icons-material";
import { 
  IconButton,
  Drawer,
  Box,
  Divider,
  Button,
  Typography
} from "@mui/material";
import ServicesMenu from "./ServicesMenu";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        edge="end"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      
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
          <ServicesMenu mobile onClose={() => setMobileMenuOpen(false)} />

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
          <LanguageSelector mobile onClose={() => setMobileMenuOpen(false)} />

          <Divider sx={{ my: 2 }} />

          <ThemeToggle mobile />
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
