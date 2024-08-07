import React from 'react';
import { Box, Typography } from '@mui/material';
import { ChevronRight as ChevronRightIcon, Flag as FlagIcon, LocalDining as LocalDiningIcon, MenuBook as MenuBookIcon } from '@mui/icons-material';

const Goals = () => {
  const items = [
    { icon: <FlagIcon />, text: "Goals", bgColor: '#9C4444' },
    { icon: <LocalDiningIcon />, text: "Popular Dishes", bgColor: '#2E3A59' },
    { icon: <MenuBookIcon />, text: "Menus", bgColor: '#1C5A5E' }
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: '#252538', color: 'white', borderRadius: '10px', width: '43%', display: 'flex', flexDirection: 'column' }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            cursor: 'pointer',
            borderBottom: index < items.length - 1 ? '1px solid #444' : 'none'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: item.bgColor, 
              borderRadius: '50%', 
              width: '40px', 
              height: '40px', 
              marginRight: '16px' 
            }}>
              {item.icon}
            </Box>
            <Typography variant="body1">
              {item.text}
            </Typography>
          </Box>
          <ChevronRightIcon sx={{ color: '#AAA' }} />
        </Box>
      ))}
    </Box>
  );
};

export default Goals;
