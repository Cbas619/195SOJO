import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss'

export function HomeNav() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><div className='logo'>SOJO</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
              <div className='loginNav'>Login</div>
            </Nav.Link>
            <Nav.Link>
            <div className='signUpNav'>Sign Up</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}