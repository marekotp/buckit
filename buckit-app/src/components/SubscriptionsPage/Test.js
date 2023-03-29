import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Container } from '@mui/system';

import styled from 'styled-components';

import theme from '../../theme';

import '../../App.css';



const data = [
  {
    name: 'Service A',
    price: '$10',
    renewalDate: '2022-04-01',
    billingCycle: 'Monthly',
  },
  {
    name: 'Service B',
    price: '$20',
    renewalDate: '2022-05-01',
    billingCycle: 'Bi-Weekly',
  },
  {
    name: 'Service C',
    price: '$30',
    renewalDate: '2022-06-01',
    billingCycle: 'Weekly',
  },
];

const ExpandableRow = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
        <div className={'row-spacing'}></div>
        <ThemeProvider theme={theme} >
          <TableRow sx={{ backgroundColor: '#f5f5f5', '& .MuiTableRow-root': { mt: 30  } }}>      
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.renewalDate}</TableCell>
            <TableCell>{row.billingCycle}</TableCell>
            <TableCell>
              <IconButton
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </TableCell>
          </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">Name:</TableCell>
                      <TableCell>{row.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Price:</TableCell>
                      <TableCell>{row.price}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Renewal Date:</TableCell>
                      <TableCell>{row.renewalDate}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Billing Cycle:</TableCell>
                      <TableCell>{row.billingCycle}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </ThemeProvider>
    </>
  );
};

export default function SubscriptionList() {
  return (
    <div>
      <Container >
          <TableContainer sx={{maxWidth: 'auto', border: 'none !important'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell >Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Renewal Date</TableCell>
                  <TableCell>Billing Cycle</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <ExpandableRow key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Container>
    </div>
    
  );
};