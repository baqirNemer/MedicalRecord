import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ResponsiveAppBar() {
  const [userDetails, setUserDetails] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userInitials, setUserInitials] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userEmail = localStorage.getItem('useremail');
        if(userEmail){ 
          const userResponse = await fetch(`http://localhost:3001/api/users/${userEmail}`);

          if (!userResponse.ok) {
            throw new Error('Failed to fetch user details');
          }

          const userData = await userResponse.json();
          setUserDetails(userData);

          if (userData.f_name && userData.l_name) {
            const firstInitial = userData.f_name.charAt(0).toUpperCase();
            const lastInitial = userData.l_name.charAt(0).toUpperCase();
            const initials = `${firstInitial}${lastInitial}`;
            setUserInitials(initials);
            console.log('User initials:', initials);
          }
      }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    // Call fetchUserDetails when component mounts
    fetchUserDetails();

    // Set user email from localStorage
    const userEmailFromLocalStorage = localStorage.getItem('useremail');
    setUserEmail(userEmailFromLocalStorage);
  }, []);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (key) => {
    setAnchorElNav(null);
    navigate(key);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleCloseUserMenu();
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('useremail');
    setUserEmail(null);
    navigate('/');
    handleCloseUserMenu();
  };

  const pages = [
    { label: 'Home', key: '/' },
    { label: 'Hospitals', key: '/hospitals' },
    { label: 'Contact', key: '/contactus' },
    { label: 'Todays Fact', key: '/todays-fact' }
  ];

  const settings = [
    { label: 'Profile', action: handleProfileClick },
    { label: 'Logout', action: handleLogoutClick }
  ];
  return (
    <AppBar position="static" sx={{ backgroundColor: '#008A88'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Navigation Links */}
          <Typography variant="h6" noWrap component={Link} to="/" sx={{ mr: 2, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
            LOGO
          </Typography>
          {/* Main Navigation Links */}
          <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.key} onClick={() => handleCloseNavMenu(page.key)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.label}
              </Button>
            ))}
          </Box>
          {/* Conditional rendering based on useremail */}
          {userEmail === null ? (
            <Box>
              <Button component={Link} to="/login" color="inherit" sx={{ mr: 1 }}>
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit" sx={{ mr: 1 }}>
                Signup
              </Button>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" sx={{ bgcolor: '#3f51b5' }}>
                    {userInitials}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.label} onClick={setting.action}>
                    {setting.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;