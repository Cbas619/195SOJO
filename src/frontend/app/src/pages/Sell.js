import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import { SellForm } from "../components/Sell/SellForm";
import Container from 'react-bootstrap/Container';
export function Sell() {
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
      <MainNav />
      <MainCategories />
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Sell Item</div>
                <div className="orderLine-1"></div>
                <SellForm />
                <br/>
                <br/>
                </Container>

            </div>
        </div>
    </>
  );
}
