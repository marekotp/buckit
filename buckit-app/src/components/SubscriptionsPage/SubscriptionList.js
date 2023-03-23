import { useState } from 'react';


export default function SubscriptionList() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const rows = [
    { name: 'Service 1', price: 10.99, date: '2022-05-31', cycle: 'Monthly' },
    { name: 'Service 2', price: 29.99, date: '2022-06-15', cycle: 'Monthly' },
    { name: 'Service 3', price: 99.99, date: '2022-04-30', cycle: 'Yearly' },
  ];

  return (
   <div>
    
   </div>
  );
}
