import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.scss'
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
import './SearchBar';
import { SearchBar } from './SearchBar';

export function MainNav() {
  const signOut = useSignOut()
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand><Link to ="/main"><img className="logo" src="/images/logo.png"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <SearchBar />
          <Nav>
            <Nav.Link>
                <Link to ="/sell"><div className='mainNavLinks'>Sell</div></Link>
            </Nav.Link>
            <Nav.Link>
            <Link to ="/chat"><div className='mainNavLinks'>Messages</div></Link>
            </Nav.Link>
            <NavDropdown className='mainNavLinks' title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item><Nav.Link><Link to ="/edit"><div className='mainNavLinks'>Edit</div></Link></Nav.Link></NavDropdown.Item>
              <NavDropdown.Item><Nav.Link><Link to ="/orders"><div className='mainNavLinks'>Orders</div></Link></Nav.Link></NavDropdown.Item>
              </NavDropdown>
            <Nav.Link>
            <Link to ="/"><div className='mainNavLinks' onClick={() => signOut()}>Sign Out</div></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}