import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function LogoutButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    navigate('/');
    handleClose();
  };

  return (
    <div>
      <Container>
        <IconButton id="logout-button"  aria-controls={open ? 'logout-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} size='large' onClick={handleOpen} sx={{ color: '#008037', fontSize: '50px' }}><AccountCircle fontSize="inherit"/></IconButton>

        <Menu id="logout-menu" anchorEl={document.querySelector('#logout-button')} open={open} onClose={handleClose}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Container>
    </div>
  );
}

export default LogoutButton;
