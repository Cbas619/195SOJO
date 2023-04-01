import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

export function MainItemCards(props) {
  const{ product } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.productName}</Card.Title>
        </Link>
        <Card.Text>
            ${product.price}
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

