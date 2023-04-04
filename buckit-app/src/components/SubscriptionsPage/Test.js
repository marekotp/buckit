import React, {useState} from 'react';
import '../../App.css';

import CancelRemindersForm from './CancelRemindersForm';

import { Table, TableBody, TableCell, TableRow, IconButton, Collapse, Typography, Paper, Button, Container } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import EditSubscription from './EditSubscription';


function ExpandableRow(props) {
  const [open, setOpen] = useState(false);
  const formattedDate = new Date(props.row.renewal_date).toLocaleDateString('en-GB');

  return (
    <>
      <div className={'row-spacing'}></div>
      
      <TableRow component={Paper} sx={{ backgroundColor: '#f5f5f5', '& .MuiTableRow-root': { mt: 30  } }}>      
        <TableCell>{props.row.name}</TableCell>
        <TableCell>{props.row.price}</TableCell>
        <TableCell>{formattedDate}</TableCell>
        <TableCell>{props.row.billing_cycle}</TableCell>
        <TableCell>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow >
        <TableCell style={{ padding: 0 }} colSpan={5}>
          <Collapse in={open}>
            
            <div style={{border: '1px #D9D9D9 solid', borderRadius: '0px 0px 25px 25px', padding: 16}}>
                <Container sx={{ display: 'flex', justifyContent: 'flex-end'}}><EditSubscription /></Container>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ borderRight: '1px solid #D9D9D9' }}>
                        <ul className={"no-bullets"}>
                          <Typography variant="h6" gutterBottom>Details:</Typography>
                          <li>
                            <strong>Name:</strong> {props.row.name}
                          </li>
                          <li>
                            <strong>Price:</strong> {props.row.price}
                          </li>
                          <li>
                            <strong>Renewal Date:</strong> {formattedDate}
                          </li>
                          <li>
                            <strong>Billing Cycle:</strong> {props.row.billing_cycle}
                          </li>
                          <li>
                            <strong>Category:</strong> {props.row.category}
                          </li>
                        </ul>
                      </TableCell>

                      <TableCell align="center" style={{ borderLeft: '1px solid #D9D9D9' }}>                        

                        <Typography variant="h6" gutterBottom>Cancellation Reminder Settings:</Typography>
                        <h5>{formattedDate}</h5>
                        <CancelRemindersForm />
                        
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
     
    </>
  );
};

export default ExpandableRow;