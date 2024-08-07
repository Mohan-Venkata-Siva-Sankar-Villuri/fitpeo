import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import StatCard from './StatCard';
import ActivityChart from './ActivityChart';
import NetProfit from './NetProfit';
import Goals from './Goals';
import CustomerFeedback from './CustomerFeedback';
import { FaShoppingCart, FaTruck,FaDollarSign,FaClipboardList } from 'react-icons/fa';
import './Dashboard.css'; // Import the CSS file
import TableOrders from './RecentOrders';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: '70px' }} className="main-content">
        <Typography variant='h4'>Dashboard</Typography>
        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingLeft: '20px', gap: '25px' }}>
            <Box sx={{ width: '65%' }}>
              <Grid sx={{ display: 'flex', gap: '10px' }}>
                <Grid item xs={12} md={4}>
                  <StatCard title="Total Orders" value="75" icon={<FaShoppingCart sx={{ width: '100px' }} />} percentage={3} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatCard title="Total Delivered" value="70" icon={<FaTruck />} percentage={3} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatCard title="Total Cancelled" value="05" icon={<FaClipboardList />} percentage={-3} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatCard title="Total Revenue" value="$12k" icon={<FaDollarSign />} percentage={-3} />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ width: '35%' }}>
              <NetProfit value="$6759.25" percentage={70} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '25px', width: '100%', paddingTop: '20px', paddingLeft: '20px' }}>
            <ActivityChart />
            <Goals />
          </Box>
          <Box sx={{ display: 'flex', paddingLeft: '20px', paddingTop: '20px', width: '100%', justifyContent: 'space-between', gap: '25px' }}>
            <TableOrders />
            <CustomerFeedback />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
