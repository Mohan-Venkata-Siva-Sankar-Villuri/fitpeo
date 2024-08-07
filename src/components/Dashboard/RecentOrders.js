import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Typography, Avatar } from '@mui/material';
import userOne from "../../images/img1.jpg";
import userTwo from "../../images/img2.jpg";
import userThree from "../../images/img3.jpg";

function createData(Customer, OrderNo, Amount, Status) {
  return { Customer, OrderNo, Amount, Status };
}

const rows = [
  createData('Wade Warren', 15478256, 124.00, 'Delivered'),
  createData('Jane Cooper', 48965786, 365.02, 'Delivered'),
  createData('Guy Hawkins', 78958215, 45.88, 'Cancelled'),
  createData('Kristin Watson', 20965732, 65.00, 'Pending'),
  createData('Cody Fisher', 95715620, 545.00, 'Delivered'),
  createData('Savannah Nguyen', 78514568, 128.20, 'Delivered'),
];

const avatarMapping = {
  'Wade Warren': userOne,
  'Jane Cooper': userTwo,
  'Guy Hawkins': userThree,
  'Kristin Watson': userOne,
  'Cody Fisher': userTwo,
  'Savannah Nguyen': userThree,
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'green';
    case 'Pending':
      return 'orange';
    case 'Cancelled':
      return 'red';
    default:
      return 'grey';
  }
};

export default function TableOrders() {
  return (
    <TableContainer sx={{ p: 2, backgroundColor: '#252538', color: 'white', borderRadius: '10px', width: '65%' }} component={Box}>
      <Typography variant='h6'>Recent Orders</Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Order No.</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Customer}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Avatar alt={row.Customer} src={avatarMapping[row.Customer]} />
                  <Typography>{row.Customer}</Typography>
                </Box>
              </TableCell>
              <TableCell align="left">{row.OrderNo}</TableCell>
              <TableCell align="left">
                ${row.Amount}
              </TableCell>
              <TableCell align="left">
                <Box align="left" sx={{ backgroundColor: getStatusColor(row.Status), color: 'white', borderRadius: '15px', padding: '4px', width: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {row.Status}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
