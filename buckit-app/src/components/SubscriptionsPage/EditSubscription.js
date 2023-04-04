import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Container, Button, Box, Typography, Modal, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1007, bgcolor: 'background.paper', borderRadius: '25px', boxShadow: 5, p: 4 };


function EditSubscription(props) {

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: props.row.name,
        price: props.row.price,
        category: props.row.category,
        renewal_date: props.row.renewal_date,
        billing_cycle: props.row.billing_cycle,
        cancellation_reminder: props.row.cancellation_reminder,
        user_id: props.row.user_id
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleSubmit = async () => {
        console.log(props.row.subscription_id)
        try {
            console.log(formData);
            await axios.put(`http://localhost:3001/api/subscriptions/${props.row.subscription_id}`, formData);
            handleClose();
            props.updateTable();
        } catch (error) {
            console.error(error);
        }
      }

      useEffect(() => {
        setFormData({
          name: props.row.name,
          price: props.row.price,
          category: props.row.category,
          renewal_date: props.row.renewal_date,
          billing_cycle: props.row.billing_cycle,
          cancellation_reminder: props.row.cancellation_reminder,
          user_id: props.row.user_id
        });
      }, [props.row]);

    const categoryOptions = ['Entertainment', 'Education', 'Work', 'Lifestyle', 'Hobbies']
    const billingCycleOptions = ['Weekly', 'Bi-Weekly', 'Monthly', 'Yearly']


    return (
        <div>
        <Container  sx={{ display: 'flex', justifyContent: 'flex-end',  '@media (max-width: 425px)': {justifyContent: 'center'}}}>
            <IconButton size="small" onClick={handleOpen} sx={{color: "#008037"}}><Edit /></IconButton>
        </Container>


        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>


                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Edit Subscription:</Typography>


                <Container id="modal-modal-description" sx={{ mt: 2 }}>


                <FormControl fullWidth margin="normal" id='nameTab'>
                    <TextField required id="name" label="Name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} sx={{ '& label': { display: 'block' } }} InputLabelProps={{ shrink: true  }}  />
                </FormControl>
                
                <FormControl fullWidth margin="normal" id='priceTab'>
                    <TextField required id="price" label="Price" type='number' value={formData.price} onChange={(event) => setFormData({ ...formData, price: event.target.value })} sx={{ '& label': { display: 'block' } }} />
                </FormControl>


                <FormControl fullWidth margin="normal" id='renewalDateTab'>
                    <TextField required id="renewalDate" label="Renewal Date" type='date' value={formData.renewal_date} onChange={(event) => { setFormData({ ...formData, renewal_date: event.target.value })}} InputLabelProps={{ shrink: true }} />
                </FormControl>


                <FormControl fullWidth margin="normal" id='billing_cycleTab' required>
                    <InputLabel id="billing_cycle-label">Billing Cycle</InputLabel>
                    <Select labelId="billing_cycle-label" id="billing_cycle" value={formData.billing_cycle} label="Billing Cycle" onChange={(event) => { setFormData({ ...formData, billing_cycle: event.target.value })}} sx={{ '& label': { display: 'block' } }}>
                    {billingCycleOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>


                <FormControl fullWidth margin="normal" id='categoryTab' required>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select labelId="category-label" id="category" value={formData.category} label="Category" onChange={(event) => setFormData({ ...formData, category: event.target.value })} sx={{ '& label': { display: 'block' } }}>
                    {categoryOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                
                <FormControl fullWidth margin="normal" id='cancellation_reminderTab'>
                <FormControlLabel control={
                    <Checkbox checked={Boolean(formData.cancellation_reminder)} onChange={(event) => setFormData({ ...formData, cancellation_reminder: event.target.checked })} name="cancellation_reminder"/>}
                    label="Send an Email cancellation reminder 7 days before renewal date"
                />
                </FormControl>


                <Button onClick={handleSubmit} sx={{ padding: 2.5, my: 3, borderRadius: 25, background: "#008037", color: "#fff", fontWeight: "bold", "&:hover": { background: "#0EA47A", color: "#fff" } }} variant="contained">Submit</Button>


                </Container>
            </Box>
        </Modal>
        </div>
    )
}

export default EditSubscription