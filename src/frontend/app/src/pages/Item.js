import { MainNav } from "../components/Main/MainNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MainCategories } from "../components/Main/MainCategories";
import Button from 'react-bootstrap/Button';
import  {useState, useEffect} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';

export function Item() {

  const navigate = useNavigate();
  const {_id} = useParams();
  const handleSubmit =(e) => {
    e.preventDefault();
    navigate('/payment');
    
  }

  const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
    paddingLeft: '90px',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get(`http://localhost:4000/api/product/find/${_id}`, {
          withCredentials: true,
        });
        setData(respo.data);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  },[]);

  console.log(data)

  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
    <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">{data.productName}</div>
                <div className="orderLine-1"></div>
    <h6>{data.image}</h6>
    <h3>{data.description}</h3>
    <h3>{data.rating}</h3>
    <h3>{data.price}</h3>
    <h3>{data.category}</h3>
    <Link to={`/payment/${data._id}`}><Button>Add to Cart</Button></Link>
                </Container>

            </div>
   
    </div>
    </>       
  );
}