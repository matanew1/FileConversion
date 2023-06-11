import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      position="fixed"
      gap="30px"
      alignItems="center"
      bottom={0}
      left={0}
      width="100%"
      display="flex"
      justifyContent="center"
      bgcolor="transparent" /* Set the background color to transparent */
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: 'transparent' }} /* Set the background color to transparent */
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon sx={{ color: 'white' }} />} /* Set the color of the icon to black */
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon sx={{ color: 'white' }} />} /* Set the color of the icon to black */
        />
      </BottomNavigation>
      <Typography variant="h7" color="white" align="center">
        © {new Date().getFullYear()} Matan Bardugo. All rights reserved.&nbsp;
      </Typography>
    </Box>
  );
};

export default Footer;
