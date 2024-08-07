import React from 'react';
import { Box, Typography, FormControl, MenuItem, Select } from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 8000 },
  { name: '11', uv: 6000 },
  { name: '13', uv: 5000 },
  { name: '15', uv: 5500 },
  { name: '17', uv: 7000 },
  { name: '19', uv: 7500 },
  { name: '21', uv: 15000 },
  { name: '23', uv: 4000 },
  { name: '25', uv: 8500 },
  { name: '27', uv: 6000 },
];

const ActivityChart = () => {
  const [timeframe, setTimeframe] = React.useState('Weekly');

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#1E1E2F', color: 'white', borderRadius: '10px', width: '80%', margin: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Activity
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
          <Select
            value={timeframe}
            onChange={handleChange}
            sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
          >
            <MenuItem value={'Weekly'}>Weekly</MenuItem>
            <MenuItem value={'Monthly'}>Monthly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
          <XAxis dataKey="name" tick={{ fill: 'white' }} />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#333333', border: 'none' }}
            itemStyle={{ color: '#8884d8' }}
            cursor={{ fill: 'rgba(136, 132, 216, 0.2)' }}
          />
          <Bar dataKey="uv" fill="#8884d8" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ActivityChart;
