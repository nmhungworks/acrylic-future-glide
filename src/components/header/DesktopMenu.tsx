
import { Box, Button } from "@mui/material";
import { ChatBubble as ChatBubbleIcon } from "@mui/icons-material";
import ServicesMenu from "./ServicesMenu";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const DesktopMenu = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
      <ServicesMenu />
      
      <Button startIcon={<ChatBubbleIcon />}>
        Contact Us
      </Button>

      <LanguageSelector />
      
      <ThemeToggle />
    </Box>
  );
};

export default DesktopMenu;
