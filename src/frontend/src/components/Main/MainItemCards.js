import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../../App.scss'

const styles = {
  cardImage: {
  objectFit: 'cover',
  width: '14.9vw',
  height: '30vh'
  }
}

export function MainItemCards(props) {
  const{ product } = props;
  return (
    <Card style={{ width: '15vw' }}>
    <Link to={`/item/${product._id}`}>
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

