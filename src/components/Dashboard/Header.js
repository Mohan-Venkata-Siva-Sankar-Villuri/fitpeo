import React from 'react';
import { AppBar, Toolbar, IconButton, Box, InputBase, Avatar } from '@mui/material';
import { Search as SearchIcon, Mail as MailIcon, Notifications as NotificationsIcon, Settings as SettingsIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1 ,minHeight:"50px"}}>
      <Toolbar sx={{ backgroundColor: '#252538', display: 'flex', justifyContent: 'space-between',paddingTop:"5px",paddingBottom:"5px" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 ,marginLeft:"70px"}}>
          <InputBase placeholder="Search…" startAdornment={<SearchIcon />} sx={{ color: 'inherit', ml: 1, backgroundColor: '#333', borderRadius: 1, padding: '0 8px' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" aria-label="show new mails" color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton size="large" aria-label="show new notifications" color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton size="large" aria-label="show new notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="large" edge="end" aria-label="account of current user" color="inherit">
            <Avatar src="/path/to/profile-pic.jpg" alt="Profile Picture" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
