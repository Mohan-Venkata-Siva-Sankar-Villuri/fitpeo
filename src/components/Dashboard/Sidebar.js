import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaHome, FaChartBar, FaShoppingCart, FaCommentDots } from 'react-icons/fa';
import WindowIcon from '@mui/icons-material/Window';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "70px",
        backgroundColor: '#252538',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
        zIndex: 2,
        gap:"30px",
        position: 'fixed',
        height: '100vh', 
      }}
    >
      <Box>
      <IconButton aria-label="dashboard" color="inherit">
      <WindowIcon sx={{ fontSize: 40, color: "aliceblue" }} />
    </IconButton>
      </Box>
      <Box sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:"20px"}}>
      <IconButton>
        <FaHome size={20} color="white" />
      </IconButton>
      <IconButton>
        <FaChartBar size={20} color="white" />
      </IconButton>
      <IconButton>
        <FaShoppingCart size={20} color="white" />
      </IconButton>
      <IconButton>
        <FaCommentDots size={20} color="white" />
      </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
