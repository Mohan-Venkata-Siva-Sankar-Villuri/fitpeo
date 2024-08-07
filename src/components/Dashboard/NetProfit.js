import React from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

const NetProfit = ({ value, percentage }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#252538', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>Net Profit</Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>{value}</Typography>
        <Typography variant="subtitle1" sx={{ color: 'green', mt: 1 }}>▲ 3%</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate" value={percentage} size={80} thickness={7} sx={{ color: '#3f51b5' }} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="white">{`${percentage}%`}</Typography>
          </Box>
        </Box>
        <Typography variant="subtitle2" sx={{ mt: 1, fontSize: '5px' }}>*The values here have been rounded off.</Typography>
      </Box>
    </Box>
  );
};

export default NetProfit;
