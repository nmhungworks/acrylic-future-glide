
import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ width: '32px', height: '32px', marginRight: '8px' }}>
        <path fill="#00a3ff" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28A5 5 0 0 1 12 7"/>
      </svg>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Future Vision
      </Typography>
    </Box>
  );
};

export default Logo;
