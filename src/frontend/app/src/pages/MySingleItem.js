import { MainNav } from "../components/Main/MainNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MainCategories } from "../components/Main/MainCategories";
import Button from 'react-bootstrap/Button';
import  {useState, useEffect} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';


export function MySingleItem() {

  const navigate = useNavigate();
  const {_id} = useParams();
  const [error, setError] = useState(null);

  const styles = {
    background: {
    backgroundColor: 'white',
    width: '55%',
    height: '700px',
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

  const productDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .delete(`http://localhost:4000/api/product/delete/${_id}`)
          console.log(res);
          navigate("/main");
    } catch (error) {
      setError("Failed to delete item")
      console.log(JSON.stringify(error));
    }
  };


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
    <div>Price: ${data.price}</div>
    <br/>
    <div>Condition: {data.rating}</div>
    <br/>
    <div>Category: {data.category}</div>
    <br/>
    <div>Description: {data.description}</div>
    <br/>
    </div>
    <Link to={`/main`}><button type="button" class="btn btn-info" onClick={productDelete}>Delete Item</button></Link>
    llllll
    <Link to={`/edititem`}><button type="button" class="btn btn-info" >Edit Item</button></Link>
                </Container>
                {error && <Alert variant="danger">
          {error}
        </Alert>}
            </div>
    </div>
    </>       
  );
}