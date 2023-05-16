import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.scss";
import { Link } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import "./SearchBar";
import { SearchBar } from "./SearchBar";
import { getCurrentUser } from "../../api/UserRequests";
import  {useState} from 'react';
import { useEffect } from 'react';

export function MainNav() {
  const signOut = useSignOut();
  const[user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const {data} =  await getCurrentUser();
        setUser(data)
        console.log("SDSD", data)
      } catch (error) {
        //console.log(error.respo);
      }
    })();
  },[]);

  const getGreeting = () => {
    if (user.firstName) {
      return `Hi, ${user.firstName}`;
    } else {
      return "Hi";
    }
  };

  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/main">
            <img className="logo" src="/images/logo.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <SearchBar />
          <Nav>
            <NavDropdown
              className="mainNavLinks"
              title={getGreeting()}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Nav.Link>
                  <Link to="/account">
                    <div className="mainNavLinks">My Profile</div>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <Link to="/orders">
                    <div className="mainNavLinks">My Orders</div>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Nav.Link>
              <Link to="/myitems">
                <div className="mainNavLinks">My Items</div>
              </Link>
            </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Nav.Link>
              <Link to="/sell">
                <div className="mainNavLinks">Sell Items</div>
              </Link>
            </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                <Link to="/chat">
                <div className="mainNavLinks">Messages</div>
              </Link>
            </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/">
                <div className="mainNavLinks" onClick={() => signOut()}>
                  Sign Out
                </div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
