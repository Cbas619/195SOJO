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
        <h3>Buy low-cost items for student needs</h3>
        </Col>
        <Col>
        <img className='homeImg' src="/images/sell-icon.png" />
        <h3>Get rid of your old items, and get your cash</h3>
        </Col>
        <Col>
        <img className='homeImg' src="/images/auction-icon.png" />
        <h3>Auction for a quick sell</h3>
        </Col>
      </Row>
    </Container>
  );
}