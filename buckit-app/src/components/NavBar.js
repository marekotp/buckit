import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";

import logo from '../images/Buckit-Logo-TSP.png';

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" style={{ height: 'auto' }}>
          <Container>
              <LinkContainer to="/">
                  <Navbar.Brand className="mr-auto">
                      <img src={logo} alt="buckit-logo" style={{ height: "50px" , maxHeight: '100%', maxWidth: '100%' }}/>
                  </Navbar.Brand>
              </LinkContainer>
  
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                      <LinkContainer to="/">
                          <Nav.Link>Dashboard</Nav.Link>
                      </LinkContainer>
  
                      <LinkContainer to="/subscriptions">
                          <Nav.Link>Subscriptions</Nav.Link>
                      </LinkContainer> 
                  </Nav>
              </Navbar.Collapse>
  
          </Container>
      </Navbar>
    );
  }
  
  export default NavBar;