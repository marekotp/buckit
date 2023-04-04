import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


import logo from '../images/Buckit-Logo-TSP.png';
import LogoutButton from './LogoutButton';

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" style={{ height: 'auto', marginTop: '2rem', marginBottom: '2rem' }}>
        <Container style={{ display: 'flex', alignItems: 'center' }}>
          <Navbar.Brand >
            <img src={logo} alt="buckit-logo" style={{ height: "50px" , maxHeight: '100%', maxWidth: '100%' }}/>
          </Navbar.Brand>
          <LogoutButton />

        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
  