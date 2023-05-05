import '../../App.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HomeIcons() {
  return (
    <Container fluid>
      <Row className='homeRow'>
        <Col>
        <img className='homeImg' src="/images/buy-icon.png" />
        <h3>Buy items from students</h3>
        </Col>
        <Col>
        <img className='homeImg' src="/images/sell-icon.png" />
        <h3>Sell items you don't need</h3>
        </Col>
        <Col>
        <img className='homeImg' src="/images/auction-icon.png" />
        <h3>Auction for a quick buy or sell</h3>
        </Col>
      </Row>
    </Container>
  );
}