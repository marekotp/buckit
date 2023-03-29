import { useState } from 'react';
import axios from 'axios';

import { Container, Button, Box, Typography, Modal, TextField, FormControl, InputLabel, Input, Select, MenuItem } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1007,
  bgcolor: 'background.paper',
  borderRadius: '25px',
  boxShadow: 5,
  p: 4,
};

export default function AddSubscription() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    renewal_date: '',
    billing_cycle: ''
  });
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const handleSubmit = async () => {
    try {
      console.log(formData)
      await axios.post('http://localhost:3001/api/subscriptions/add-subscription', formData);
  
      setFormData({
        name: '',
        price: '',
        category: '',
        renewal_date: '',
        billing_cycle: ''
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  


  const categoryOptions = ['Entertainment', 'Education', 'Work', 'Lifestyle', 'Hobbies']
  const billingCycleOptions = ['Weekly', 'Bi-Weekly', 'Monthly', 'Yearly']

  return (
    <div>
      <Container  sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={handleOpen} sx={{padding: 2.5, my: 3, borderRadius: 25, background: "#008037", color: "#fff", fontWeight: "bold",  "&:hover": {background: "#0EA47A", color: "#fff"}}} variant="contained">Add Subscription</Button>
      </Container>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Add Subscription:</Typography>

            <Container id="modal-modal-description" sx={{ mt: 2 }}>

              <FormControl fullWidth margin="normal" id='nameTab'>
                <TextField required id="name" label="Name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} sx={{ '& label': { display: 'block' } }} InputLabelProps={{ shrink: true  }}  />
              </FormControl>
              
              <FormControl fullWidth margin="normal" id='priceTab'>
                <TextField required id="price" label="Price" type='number' value={formData.price} onChange={(event) => setFormData({ ...formData, price: event.target.value })} sx={{ '& label': { display: 'block' } }} />
              </FormControl>

              <FormControl fullWidth margin="normal" id='renewalDateTab'>
                <TextField required id="renewalDate" label="Renewal Date" type='date' value={formData.renewal_date} onChange={(event) => {console.log(event.target.value); setFormData({ ...formData, renewal_date: event.target.value })}} InputLabelProps={{ shrink: true }} />
              </FormControl>

              <FormControl fullWidth margin="normal" id='billingCycleTab'>
                <InputLabel id="billingCycle-label">Billing Cycle</InputLabel>
                <Select labelId="billingCycle-label" id="billingCycle" value={formData.billing_cycle} label="Billing Cycle" onChange={(event) => {console.log(event.target.value); setFormData({ ...formData, billing_cycle: event.target.value })}} sx={{ '& label': { display: 'block' } }}>
                  {billingCycleOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal" id='categoryTab'>
                <InputLabel id="category-label">Category</InputLabel>
                <Select labelId="category-label" id="category" value={formData.category} label="Category" onChange={(event) => setFormData({ ...formData, category: event.target.value })} sx={{ '& label': { display: 'block' } }}>
                  {categoryOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <Button onClick={handleSubmit} sx={{ padding: 2.5, my: 3, borderRadius: 25, background: "#008037", color: "#fff", fontWeight: "bold", "&:hover": { background: "#0EA47A", color: "#fff" } }} variant="contained">Submit</Button>


            </Container>
        </Box>
      </Modal>





    </div>
  );
}
