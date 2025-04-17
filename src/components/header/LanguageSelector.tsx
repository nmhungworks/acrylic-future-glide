
import { useState } from "react";
import { 
  Language as LanguageIcon, 
  KeyboardArrowDown 
} from "@mui/icons-material";
import { 
  Button, 
  Menu, 
  MenuItem, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from "@mui/material";

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
  { name: "Français", code: "fr" },
  { name: "Deutsch", code: "de" },
  { name: "中文", code: "zh" }
];

interface LanguageSelectorProps {
  mobile?: boolean;
  onClose?: () => void;
}

const LanguageSelector = ({ mobile = false, onClose }: LanguageSelectorProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageSelect = (language: string) => {
    setCurrentLanguage(language);
    handleLanguageClose();
    if (mobile && onClose) {
      onClose();
    }
  };

  if (mobile) {
    return (
      <>
        <List>
          {languages.map((language) => (
            <ListItem key={language.code} disablePadding>
              <ListItemButton
                onClick={() => handleLanguageSelect(language.name)}
              >
                <ListItemText primary={language.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
    );
  }

  return (
    <>
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
    </>
  );
};

export default LanguageSelector;
