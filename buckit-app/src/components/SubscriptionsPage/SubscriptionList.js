import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

import Summary from './Summary';
import AddSubscription from "./AddSubscription";
import ExpandableRow from './ExpandableRow';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { tableCellClasses } from "@mui/material/TableCell";
import NoSubscriptionsPlaceHolder from './NoSubscriptionsPlaceHolder';

export default function SubscriptionList() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);
  const [userName, setUserName] = useState('');
  const [user_id, setUserId] = useState('');
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    const storedJwtToken = localStorage.getItem('jwtToken');
    setUserId(storedUserId);
    setJwtToken(storedJwtToken);
    

    async function getName() {
      const response = await axios.get(`http://localhost:3001/api/users/user-search/${storedUserId}`, {
        headers: {
          'Authorization': `Bearer ${storedJwtToken}`
        }
      });
      const user = response.data.users[0].first_name;
      setUserName(user);      
    } 
  
    async function fetchSubscriptions() {
      try {
        const response = await axios.get(`http://localhost:3001/api/users/${storedUserId}`,
          {
            headers: {
              'Authorization': `Bearer ${storedJwtToken}`
            }
          });
          const subscriptionsReturn = response.data
          const userSubscriptions = subscriptionsReturn.filter(subscriptions => subscriptions.user_id === storedUserId);
         
          const totalSum = subscriptionsReturn.reduce((acc, cur) => {
            let price = parseFloat(cur.price);
      
            if (cur.billing_cycle === "Yearly") {
              price = price / 12;
            } else if (cur.billing_cycle === "Bi-Weekly") {
              price = price * 2.17;
            } else if (cur.billing_cycle === "Weekly") {
              price = price * 4.33;
            }
      
            console.log(`Subscription: ${cur.name}, Price: ${price.toFixed(2)}, Billing Cycle: ${cur.billing_cycle}`);
      
            return acc + price;
          }, 0);

          console.log(`Total Sum: ${totalSum.toFixed(2)}`);
          
          setSubscriptions(userSubscriptions);
          setTotalSpend(parseFloat(totalSum.toFixed(2)));
        } catch (err) {
          console.error(err);
        }
    }
  
    if (storedUserId && storedJwtToken) {
      getName();
      fetchSubscriptions();
    }
  }, []);

  const fetchLatestSubscriptions = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/${user_id}`,
          {
            headers: {
              'Authorization': `Bearer ${jwtToken}`
            }
          });
      const subscriptionsReturn = response.data
      const userSubscriptions = subscriptionsReturn.filter(subscriptions => subscriptions.user_id === user_id)

      const totalSum = subscriptionsReturn.reduce((acc, cur) => {
        let price = parseFloat(cur.price);
  
        if (cur.billing_cycle === "Yearly") {
          price = price / 12;
        } else if (cur.billing_cycle === "Bi-Weekly") {
          price = price * 2;
        } else if (cur.billing_cycle === "Weekly") {
          price = price * 4;
        }
  
        console.log(`Subscription: ${cur.name}, Price: ${price.toFixed(2)}, Billing Cycle: ${cur.billing_cycle}`);
  
        return acc + price;
      }, 0);

      console.log(`Total Sum: ${totalSum.toFixed(2)}`);
      
      setSubscriptions(userSubscriptions);
      setTotalSpend(parseFloat(totalSum.toFixed(2)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Summary totalSpend={totalSpend} name={userName}/>

      <AddSubscription onAddSubscription={fetchLatestSubscriptions} user_id={user_id}/>
      
      <Container sx={{mb: 3}}>
          <h3 style={{marginBottom: 25}}><strong>Subscriptions List</strong></h3>
          <TableContainer sx={{maxWidth: 'auto'}}>
            <Table sx={{[`& .${tableCellClasses.root}`]: {borderBottom: "none",}}}>
                <TableHead>
                  <TableRow >
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Renewal Date</TableCell>
                    <TableCell>Billing Cycle</TableCell>
                    <TableCell>Reminders On</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                {subscriptions.length === 0 ? (
                  <TableBody>
                      <TableCell colSpan={7}>
                        <NoSubscriptionsPlaceHolder />
                      </TableCell>
                  </TableBody>
                ) : (
                  <TableBody>
                    {subscriptions.map((subscription) => (
                      <ExpandableRow key={subscription.subscription_id} row={subscription} updateTable={fetchLatestSubscriptions}></ExpandableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
          </TableContainer>
      </Container>
    </>
    
  );
};