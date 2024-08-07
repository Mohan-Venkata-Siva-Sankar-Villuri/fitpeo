import React from 'react';
import { Typography, Box } from '@mui/material';
import { FaShoppingCart, FaTruck, FaDollarSign, FaClipboardList } from 'react-icons/fa';

const StatCard = ({ title, value, icon, percentage }) => {
  const getColor = (icon) => {
    switch (icon.type) {
      case FaShoppingCart:
        return 'red';
      case FaTruck:
        return 'blue';
      case FaDollarSign:
        return 'green';
      case FaClipboardList:
        return 'purple';
      default:
        return 'white';
    }
  };

  return (
    <Box 
      sx={{ 
        p: 2, 
        textAlign: 'center', 
        backgroundColor: '#1C1C2E', 
        color: 'white', 
        borderRadius: '10px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexDirection: "column"
        }}
      >
        <Box align='left' sx={{ fontSize: '40px', color: getColor(icon) }}>
          {icon}
        </Box>
        <Box>
          <Typography align='left' sx={{ fontSize: "15px", fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
        <Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: '30px', 
              fontWeight: 700 
            }}
          >
            {value}
          </Typography>
        </Box>
        <Box>
          {percentage !== undefined && (
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontSize: '18px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <span 
                style={{ 
                  color: percentage > 0 ? 'green' : 'red', 
                  marginRight: '5px' 
                }}
              >
                {percentage > 0 ? '▲' : '▼'}
              </span>
              {percentage}%
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default StatCard;
