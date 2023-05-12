import { MainNav } from "../components/Main/MainNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MainCategories } from "../components/Main/MainCategories";
import Button from 'react-bootstrap/Button';
import  {useState, useEffect} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';

export function SingleOrder() {

  const navigate = useNavigate();
  const {_id} = useParams();

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
                <img src={data.image} className="item-img"alt="No img provided" width="450" height="450"/> 
                <div className="item-content">
      <br/>
    <h3>Description: {data.description}</h3>
    <br/>
    <h3>Condition: {data.rating}</h3>
    <br/>
    <h3>Price: ${data.price}</h3>
    <br/>
    <h3>Category: {data.category}</h3>
    <br/>
    </div>
                </Container>

            </div>
   
    </div>
    </>       
  );
}