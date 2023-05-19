import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link  } from 'react-router-dom'
import './Item.scss'


const styles = {
    cardImage: {
    objectFit: 'cover',
    width: '14.9vw',
    height: '30vh'
    }
  }

export function MyItemCard(props) {
    const{ product } = props
    return (
        <Card style={{ width: '15vw' }}>
    <Link to={`/singleitem/${product._id}`}>
      <Card.Img variant="top" src={product.image} style={styles.cardImage}/>
    </Link>
      <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
        Purchased: {product.purchased ? "Yes" : "No"}
        </Card.Text>
      </Card.Body>
      
    </Card>
    );
}