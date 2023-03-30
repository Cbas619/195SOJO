import { MainNav } from "../components/Main/MainNav";
import { MainHeaders } from "../components/Main/MainHeaders"
import { MainCategories } from "../components/Main/MainCategories";
import { MainItemCards } from "../components/Main/MainItemCards";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  {useState} from 'react';
import { useEffect } from 'react';
//import { Logout } from "../utils/Logout";

export function Main() {
  const navigate = useNavigate();
  const Logout = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:4000/api/auth/logout")
      .then((response, err) => {
      console.log(response);
      navigate('/');
      
    })} catch (error){
      console.log(JSON.stringify(error));
    }
  };


  const [state, setState] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      fetch("http://localhost:4000/api/product/all")
     .then(response => response.json())
     .then(res => setState(res))
    } catch (err) {
      alert(err.message)
    }
  }
  console.log(state)

  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">

      <div className="mainMessagesSection">
        <div id="mainMessagesHeader">Your messages</div>
        <div className="mainLine-1"></div>
        <div className="mainItemCardContainer">
        {state.map((item, i) => (
          //state[i].purchased === false &&
            <div className="mainItemCard">
            <MainItemCards itemName={state[i].productName} itemPrice={state[i].price} itemImage={state[i].image}/>
            </div>
        ))}
          </div>
      </div>

      <div className="mainFeaturedSection">
        <div id="mainPageHeader">Featured Items</div>
        <div className="mainLine-1"></div>
        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Books for the brain | " linkHeader="See all books" categoryLink="/books"/>
          <div className="mainItemCardContainer">
          {state.map((item, i) => (
          state[i].category === 'books' && state[i].purchased === false &&
            <div className="mainItemCard">
            <MainItemCards itemName={state[i].productName} itemPrice={state[i].price} itemImage={state[i].image}/>
            </div>
        ))}
          </div>
        </div>

        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Work with Supplies | " linkHeader="See all school supplies" categoryLink="/officesupplies" />
          <div className="mainItemCardContainer">
          {state.map((item, i) => (
          state[i].category === 'supplies' && state[i].purchased === false &&
            <div className="mainItemCard">
            <MainItemCards itemName={state[i].productName} itemPrice={state[i].price} itemImage={state[i].image}/>
            </div>
        ))}
          </div>
          
        </div>
      </div>
      
      <br></br>
      <Button variant="primary" type="submit" onClick={Logout}>
        Logout
      </Button>
    </div>
    
    </>       
  );
}