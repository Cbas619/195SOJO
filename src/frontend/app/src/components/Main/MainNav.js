import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss'
import { Link } from 'react-router-dom';

export function MainNav() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand><Link to ="/main"><img className="logo" src="/images/logo.png"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
                <Link to ="/sell"><div className='mainNavLinks'>Sell</div></Link>
            </Nav.Link>
            <Nav.Link>
                <div className='mainNavLinks'>Messages</div>
            </Nav.Link>
            <Nav.Link>
            <Link to ="/account"><div className='mainNavLinks'>Account</div></Link>
            </Nav.Link>
            <Nav.Link>
            <Link to ="/"><div className='mainNavLinks'>Log Out</div></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}