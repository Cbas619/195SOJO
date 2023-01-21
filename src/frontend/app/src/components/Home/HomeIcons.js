import '../../App.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function HomeIcons() {
  return (
    <Container fluid>
      <Row className='homeRow'>
        <Col>
        <h3>Buy low-cost items for student needs</h3>
        </Col>
        <Col>
        <h3>Get rid of your old items, and get your cash</h3>
        </Col>
        <Col>
        <h3>Auction for a quick sell</h3>
        </Col>
      </Row>
    </Container>
  );
}