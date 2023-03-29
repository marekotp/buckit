import { useState } from 'react';
import { Table, Collapse, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import CancelRemindersForm from './CancelRemindersForm';
import '../../App.css';

const data = [
  {
    name: 'Netflix',
    price: '$32.99',
    renewalDate: '2022-04-01',
    billingCycle: 'Monthly',
    category: 'Entertainment'
  },
  {
    name: 'Adobe',
    price: '$120.00',
    renewalDate: '2022-05-01',
    billingCycle: 'Yearly',
    category: 'Work'
  },
  {
    name: 'Gym',
    price: '$58.00',
    renewalDate: '2022-06-01',
    billingCycle: 'Bi-Weekly',
    category: 'Lifestyle'
  },
];

const ExpandButton = ({ open, onClick }) => (
  <Button variant="link" onClick={onClick}>
    {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
  </Button>
);


const ExpandableRow = ({ row }) => {
  const [open, setOpen] = useState(false);

  const formattedDate = new Date(row.renewalDate).toLocaleDateString('en-GB');


  return (
    <>
      <div className={'row-spacing'}></div>
      <tr>
        <td className="text-center align-middle">{row.name}</td>
        <td className="text-left align-middle border-zero">{row.price}</td>
        <td className="text-left align-middle border-zero">{formattedDate}</td>
        <td className="text-left align-middle border-zero">{row.billingCycle}</td>
        <td>
          <ExpandButton open={open} onClick={() => setOpen(!open)} />
        </td>
      </tr>
      

      <tr className={open ? null : 'collapsed-row'}>
        <td colSpan={5}>
          <Collapse in={open}>
            <div>
              <Table bordered>
                <tbody  className='borderless'>
                  <tr>
                    <td><h4 >Details:</h4></td>
                    <td><h4>Cancellation Reminder Settings:</h4></td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 15 }}>
                        <ul className='no-bullets'>
                          <li><strong>Name:</strong> {row.name}</li>
                          <li><strong>Price:</strong> {row.price}</li>
                          <li><strong>Renewal Date:</strong> {formattedDate}</li>
                          <li><strong>Billing Cycle:</strong> {row.billingCycle}</li>
                          <li><strong>Category:</strong> {row.category}</li>
                        </ul>   
                      </div>
                    </td>

                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 15 }}>
                        <h5>{formattedDate}</h5>
                        <CancelRemindersForm />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Collapse>
        </td>
      </tr>
    </>
  );
};

export default function SubscriptionList() {
  return (
    <div className="container">
      <Table striped bordered>
        <thead className='borderless'>
          <tr>
            <th className={'text-left'}>Name</th>
            <th className={'text-left'}>Price</th>
            <th className={'text-left'}>Renewal Date</th>
            <th className={'text-left'}>Billing Cycle</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <ExpandableRow key={row.name} row={row} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
