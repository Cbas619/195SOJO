import { HomeNav } from "../components/Home/HomeNav";
import { SignupForm } from "../components/Signup/SignupForm";
import Container from 'react-bootstrap/Container';

export function Signup() {

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
      <HomeNav />
      <div className="background-1">
            <div className="signUpPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Sign Up</div>
                <div className="orderLine-1"></div>
                <SignupForm />
                <br/>
                <br/>
                </Container>

            </div>
        </div>
    </>
  );
}
