import { HomeNav } from "../components/Home/HomeNav";
import { SignupForm } from "../components/Signup/SignupForm";
import Container from 'react-bootstrap/Container';

export function Signup() {

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
      <HomeNav />
      <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Sign Up</div>
                <div className="orderLine-1"></div>
                <SignupForm />
                </Container>

            </div>
        </div>
    </>
  );
}
