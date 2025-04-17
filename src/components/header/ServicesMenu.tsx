
import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { 
  Button, 
  Menu, 
  MenuItem, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Typography
} from "@mui/material";

const services = [
  { name: "AI Text Generation", href: "#text-generation" },
  { name: "Image Synthesis", href: "#image-synthesis" },
  { name: "Data Analytics", href: "#data-analytics" },
  { name: "Voice Recognition", href: "#voice-recognition" },
  { name: "Video Processing", href: "#video-processing" },
  { name: "Predictive Modeling", href: "#predictive-modeling" }
];

interface ServicesMenuProps {
  mobile?: boolean;
  onClose?: () => void;
}

const ServicesMenu = ({ mobile = false, onClose }: ServicesMenuProps) => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleServiceSelect = () => {
    handleServicesClose();
    if (mobile && onClose) {
      onClose();
    }
  };

  if (mobile) {
    return (
      <>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          AI Services
        </Typography>
        <List>
          {services.map((service) => (
            <ListItem key={service.name} disablePadding>
              <ListItemButton
                component="a"
                href={service.href}
                onClick={handleServiceSelect}
              >
                <ListItemText primary={service.name} />
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
    </>
  );
};

export default ServicesMenu;
