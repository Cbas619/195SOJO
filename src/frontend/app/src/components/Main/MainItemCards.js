import Card from 'react-bootstrap/Card';
import { Link  } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import '../../App.scss'

const styles = {
  cardImage: {
  objectFit: 'cover',
  width: '11.9vw',
  height: '25vh'
  }
}

export function MainItemCards(props) {
  const{ product } = props
  return (
    <Card style={{ width: '12vw' }}>
    <Link to={`/item/${product._id}`}>
      <Card.Img variant="top" src={product.image} style={styles.cardImage}/>
    </Link>
      <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
            ${product.price}
        </Card.Text>
        <Card.Text>
            Sold by: {product.firstName} {product.lastName}
        </Card.Text>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

