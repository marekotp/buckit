import { useState } from 'react'
import axios from 'axios';

import { Container, Button, Box, Typography, Modal, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1007, bgcolor: 'background.paper', borderRadius: '25px', boxShadow: 5, p: 4 };


function DeleteSubscription(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleSubmit = async () => {
        console.log(props.row.subscription_id)
        try {
            await axios.delete(`http://localhost:3001/api/subscriptions/${props.row.subscription_id}`);
            handleClose();
            props.updateTable();
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
        <Container  sx={{ display: 'flex', justifyContent: 'flex-end',  '@media (max-width: 425px)': {justifyContent: 'center'}}}>
            <IconButton size="small" onClick={handleOpen} sx={{color: "#008037"}}><Delete /></IconButton>
        </Container>


        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>


                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight: 'bold'}}>Delete Subscription:</Typography>


                <Container id="modal-modal-description" sx={{ mt: 2 }}>
                    
                    <Typography id="modal-modal-title" variant="h6" >Are you sure you wish to delete this subscription?</Typography>
                    <Button onClick={handleSubmit} sx={{ padding: 2.5, my: 3, borderRadius: 25, background: "#008037", color: "#fff", fontWeight: "bold", "&:hover": { background: "#0EA47A", color: "#fff" } }} variant="contained">DELETE</Button>

                </Container>
            </Box>
        </Modal>
        </div>
    )
}

export default DeleteSubscription