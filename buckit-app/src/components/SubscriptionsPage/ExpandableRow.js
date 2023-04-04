import '../../App.css';

import EditSubscription from './EditSubscription';
import DeleteSubscription from './DeleteSubscription';

import {TableCell, TableRow, Paper, Checkbox} from '@mui/material';


function ExpandableRow(props) {
  const formattedDate = new Date(props.row.renewal_date).toLocaleDateString('en-GB');

  return (
    <>
      <div className='row-spacing'></div>
      <TableRow component={Paper} sx={{ backgroundColor: '#f5f5f5', '& .MuiTableRow-root': { mt: 30  } }}>      
        <TableCell>{props.row.name}</TableCell>
        <TableCell>${props.row.price}</TableCell>
        <TableCell>{formattedDate}</TableCell>
        <TableCell>{props.row.billing_cycle}</TableCell>
        <TableCell>{props.row.cancellation_reminder === true ? <Checkbox disabled checked/> : <Checkbox disabled /> }</TableCell>
        <TableCell>{props.row.category}</TableCell>
        <TableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <EditSubscription {...props} />
          <DeleteSubscription {...props} />
        </TableCell>
      </TableRow>
      <div className='row-spacing'></div>
    </>
  );
};

export default ExpandableRow;