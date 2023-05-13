import { MainNav } from "../components/Main/MainNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MainCategories } from "../components/Main/MainCategories";
import Button from 'react-bootstrap/Button';
import  {useState, useEffect} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import { getCurrentUser } from "../api/UserRequests";

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
  const[user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const {data} =  await getCurrentUser();
        setUser(data)
        console.log("SDSD", data)
      } catch (error) {
        //console.log(error.respo);
      }
    })();
  },[]);

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

  const messageSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if chat already exists
      const existingChatResponse = await axios.get(
        `http://localhost:4000/api/chat/find/${user._id}/${data.sellerId}`
      );
  
      if (existingChatResponse.data) {
        // Chat already exists, navigate to the existing chat
        navigate('/chat');
      } else {
        // Chat does not exist, start a new chat
        axios
          .post("http://localhost:4000/api/chat/start", {
            senderId: user._id,
            receiverId: data.sellerId,
            productId: data._id,
            productName: data.productName,
          })
          .then((response) => {
            console.log(response);
            navigate('/chat');
          });
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

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
    <Link to={`/payment/${data._id}`}><Button>Buy now</Button></Link>
    <br></br>
    <br></br>
    <Link to={`/chat`}><button type="button" class="btn btn-info" onClick={messageSubmit}>Message Seller</button></Link>
    </div>
   
                </Container>
            </div>
   
    </div>
    </>       
  );
}