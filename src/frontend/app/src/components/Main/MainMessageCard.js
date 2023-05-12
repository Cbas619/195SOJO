import Card from 'react-bootstrap/Card';
import { Link  } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import '../../App.scss'

const styles = {
  cardImage: {
  objectFit: 'cover',
  width: '14.9vw',
  height: '30vh'
  }
}

export function MainMessageCard(props) {
  const{ order } = props
  return (
    <Card style={{ width: '15vw' }}>
    <Link to={`/chat`}>
      <Card.Img variant="top" src={order.image} style={styles.cardImage}/>
    </Link>
      <Card.Body>
          <Card.Title>{order.productName}</Card.Title>
        <Card.Text>
            ${order.price}
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

