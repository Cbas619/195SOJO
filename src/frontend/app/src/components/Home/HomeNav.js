import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss'
import { Link } from 'react-router-dom';

export function HomeNav() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/"><img className="logo" src="/images/logo.png"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login"><div className='loginNav'>Login</div></Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/signup"><div className='signUpNav'>Sign Up</div></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}