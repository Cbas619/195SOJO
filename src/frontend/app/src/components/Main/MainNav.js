import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss'

export function MainNav() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className="logo" src="/images/logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
                <div className='mainNavLinks'>Sell</div>
            </Nav.Link>
            <Nav.Link>
                <div className='mainNavLinks'>Inbox</div>
            </Nav.Link>
            <Nav.Link>
                <div className='mainNavLinks'>Account</div>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}