import { HomeNav } from "../components/Home/HomeNav";
import { LoginForm } from "../components/Login/LoginForm";
import Container from 'react-bootstrap/Container';

export function Login() {
  const styles = {
    background: {
    backgroundColor: 'white',
    width: '30%',
    height: '50%',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  return (
    <>
    <HomeNav/> 
    <div className="background-1">
            <div className="loginPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Login</div>
                <div className="orderLine-1"></div>
                <LoginForm/>
                <br/>
                <br/>
                </Container>

            </div>
        </div>
    </>       
  );
}