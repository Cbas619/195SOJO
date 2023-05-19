import { MainNav } from "../components/Main/MainNav";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MainCategories } from "../components/Main/MainCategories";
import Button from 'react-bootstrap/Button';
import  {useState, useEffect} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import { getCurrentUser } from "../api/UserRequests";

export function AddressPage() {

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
    width: '55%',
    height: '700px',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }
  const [idData, setIdData] = useState("");
  const[userId, setUserId] = useState();
  useEffect(() => {
    (async () => {
      try {
        const {data} =  await getCurrentUser();
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
        setIdData(respo.data._id);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  },[]);

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get(`http://localhost:4000/api/payment/findbyproduct/${idData}`, {
          withCredentials: true,
        });
        setUserId(respo.data[0]);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });




  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
    <div className="ordersPageContainer">
                <Container style={styles.background}>
                    <div className="ordersPageHeader">Buyer Details</div>
                <div className="orderLine-1"></div>
    <img src={idData.image} className="item-img"alt="No img provided" width="450" height="450"/> 
    <div className="item-content">
    <div>Bought by: {!(userId) ? 'Loading...':userId.firstName} { !(userId) ? 'Loading...':userId.lastName}</div>
    <br/>
    <div>Email: { !(userId) ? 'Loading...': userId.email}</div>
    <br/>
    <div>Address: { !(userId) ? 'Loading...':userId.address}</div>
    <br/>
    <div>City: { !(userId) ? 'Loading...':userId.city}</div>
    <br/>
    <div>State: { !(userId) ? 'Loading...':userId.state}</div>
    <br></br>
    <div>State: { !(userId) ? 'Loading...':userId.zip}</div>
    <br></br>
    <br></br>
    <Link to={`/chat`}><button type="button" class="btn btn-info">Message Buyer</button></Link>
    </div>
   
                </Container>
            </div>
   
    </div>
    </>       
  );
}