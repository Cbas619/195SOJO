import Card from 'react-bootstrap/Card';


export function MainItemCards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/placeholder.png" />
      <Card.Body>
        <Card.Title>{props.itemName}</Card.Title>
        <Card.Text>
          ${props.itemPrice}
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

