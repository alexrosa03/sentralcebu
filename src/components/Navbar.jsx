import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import sentralLoading from '../images/sentralLoading.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import { 
    Tabs, 
    Tab, 
    AppBar, 
    Toolbar, 
    Box, 
    IconButton,
    Typography 
} from '@mui/material';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is mobile
  const [open, setOpen] = useState(false); // State to control mobile menu
  const handleMenuToggle = () => setOpen(!open);

  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.primary.dark }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={sentralLoading}
              style={{ height: '50px', width: '50px', borderRadius: '50%' }}
              alt="Left Logo"
            />
          </Box>

          {/* Centered Tabs (only show on larger screens) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
              <Tabs value={0} centered sx={{ color: theme.palette.text.primary }}>
                <Tab label="Home" />
                <Tab label="What's up!" />
                <Tab label="Private Events" />
                <Tab label="Book a table" />
              </Tabs>
            </Box>
          )}

          {/* Right Side: Social Media Icons and Menu Button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FacebookIcon sx={{ height: '30px', width: '30px', color: theme.palette.primary.contrastText }} />
            <InstagramIcon sx={{ height: '30px', width: '30px', color: theme.palette.primary.contrastText }} />
            
            {/* Mobile Menu Button (only visible on small screens) */}
            {isMobile && (
              <IconButton color="inherit" onClick={handleMenuToggle}>
                <MenuIcon sx={{ height: '30px', width: '30px', color: theme.palette.primary.contrastText }} />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* Mobile Menu (Drawer or List) */}
        {isMobile && open && (
          <Box sx={{
            position: 'absolute',
            top: '64px', // Adjusted based on toolbar height
            left: 0,
            right: 0,
            bgcolor: theme.palette.primary.main,
            boxShadow: 3,
            zIndex: 1
          }}>
            <Tabs value={0} centered sx={{ color: theme.palette.text.primary }}>
              <Tab label="Home" />
              <Tab label="What's up!" />
              <Tab label="Private Events" />
              <Tab label="Book a table" />
            </Tabs>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
