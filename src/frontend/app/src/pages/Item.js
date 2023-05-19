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
      width: '55%',
      height: '700px',
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
      const existingChatResponse = await axios.get(
        `http://localhost:4000/api/chat/find/${user._id}/${data.sellerId}`
      );
  
      if (existingChatResponse.data) {
        navigate(`/chat/${existingChatResponse.data._id}`);
      } else {
        const startChatResponse = await axios.post(
          "http://localhost:4000/api/chat/start",
          {
            senderId: user._id,
            receiverId: data.sellerId,
          }
        );
        navigate(`/chat/${startChatResponse.data._id}`);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  console.log("DAH DATA", data)

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
    <div>Price: ${data.price}</div>
    <br/>
    <div>Condition: {data.rating}</div>
    <br/>
    <div>Category: {data.category}</div>
    <br/>
    <div>Description: {data.description}</div>
    <br/>
    <div>Payment Type: {data.paymentType}</div>
    <br/>
    <div>Sold by: {data.firstName} {data.lastName}</div>
    <br></br>
    <button type="button" className="btn btn-info" onClick={messageSubmit}>Message Seller</button>
    <br></br>
    <br/>
    {data.paymentType === "in-person" ? "" :
    <Link to={`/payment/${data._id}`}><Button>Buy now</Button></Link>}
    </div>
   
                </Container>
            </div>
   
    </div>
    </>       
  );
}