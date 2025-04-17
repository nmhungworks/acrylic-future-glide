
import { 
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import Logo from "./header/Logo";
import DesktopMenu from "./header/DesktopMenu";
import MobileMenu from "./header/MobileMenu";

const Header = () => {
  return (
    <AppBar position="fixed" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <DesktopMenu />
          <MobileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
