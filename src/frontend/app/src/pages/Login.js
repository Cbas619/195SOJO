import { HomeNav } from "../components/Home/HomeNav";
import { LoginForm } from "../components/Login/LoginForm";
import Container from 'react-bootstrap/Container';

export function Login() {
  const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  return (
    <>
    <HomeNav/> 
    <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Login</div>
                <div className="orderLine-1"></div>
                <LoginForm/>
                </Container>

            </div>
        </div>
    </>       
  );
}