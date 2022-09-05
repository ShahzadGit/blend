import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" style={{backgroundColor: 'darkblue'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color: 'white', marginRight: '200px'}}>BLEND</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" >
           
            <NavDropdown  title={<span className='dropdown'>Why Blend</span>}  id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Acion
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span style={{color: 'white'}}>Products</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Acion
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features" style={{color: 'white'}}>Customers</Nav.Link>

            <NavDropdown title={<span style={{color: 'white'}}>Resources</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Acion
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span style={{color: 'white'}}>Company</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Acion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-success" style={{backgroundColor: 'white', color: 'darkblue'}}>Request Demo</Button>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;