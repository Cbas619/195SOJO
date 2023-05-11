import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link  } from 'react-router-dom'
import './OrderCard.scss'


const styles = {
    cardImage: {
    objectFit: 'cover',
    width: '14.9vw',
    height: '30vh'
    }
  }

export function OrderCard(props) {
    const{ product } = props
    return (
        <Card style={{ width: '15vw' }}>
    <Link to={`/singleorder/${product.productId}`}>
      <Card.Img variant="top" src={product.image} style={styles.cardImage}/>
    </Link>
      <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
            ${product.price}
        </Card.Text>
      </Card.Body>
      
    </Card>
    );
}