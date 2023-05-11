import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import { SellForm } from "../components/Sell/SellForm";
import Container from 'react-bootstrap/Container';
export function Sell() {
  const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
    paddingLeft: '90px',
    paddingRight: '90px',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  return (
    <>
      <MainNav />
      <MainCategories />
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Sell Item</div>
                <div className="orderLine-1"></div>
                <SellForm />
                </Container>

            </div>
        </div>
    </>
  );
}
