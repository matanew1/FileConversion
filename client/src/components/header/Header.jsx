import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Container, Button, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

const Header = () => {
  // State for menu anchor element
  const [anchorEl, setAnchorEl] = useState(null);

  // Event handler for opening the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logoSrc = '/logo.jpeg';
  const logoAlt = 'LOGO';
  const headerText = 'FILE CONVERSION';
  const mailto = "mailto:matanew1@gmail.com"

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        {/* Grid container to structure the header */}
        <Container style={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }}>
          <Grid container  style={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }} spacing={1}>
            <Grid item>
              {/* Logo */}
              <Box display="flex" alignItems="center" gap="20px">
                <img className="logo" src={logoSrc} alt={logoAlt} />
                {/* Text label */}
                <Typography variant="h6" component="h1" color="black" fontWeight='bold'>
                  {headerText}
                </Typography>
              </Box>
            </Grid>
            {/* Menu items */}
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button component={Link} to="/" style={{ fontWeight: 'bold', color: "black" }}>
                Home
              </Button>
              <Button component={Link} to={mailto} style={{ fontWeight: 'bold', color: "black" }}>
                Contact
              </Button>
            </Grid>
            {/* Hamburger menu */}
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton style={{ fontWeight: 'bold', color: "black" }} onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              {/* Menu component */}
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {/* Menu items */}
                <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem component={Link} to={mailto} onClick={handleMenuClose}>
                  Contact
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
