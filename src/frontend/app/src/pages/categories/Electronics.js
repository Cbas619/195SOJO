import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";
import  {useState} from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export function Electronics() {

  const [state, setState] = useState([])
  const navigate = useNavigate();
  const [cart, setCart] = useState("");

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

  //Add to cart handle submit
  const handleSubmit =(e) => {
    e.preventDefault();
    navigate('/payment');
    
  }


  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <div className="categoryPageHeader">Electronics</div>
      <div className="categorySection">
        <div className="categoryItemCardContainer">
        {state.map((item, i) => (
           state[i].category === 'electronics' && state[i].purchased === false &&
            <div className="mainItemCard">
            <MainItemCards itemName={state[i].productName} itemPrice={state[i].price} itemImage={state[i].image}/>
            </div>
        ))}      
        </div>

        <div>
          <Button onClick={handleSubmit} onChange={(e) => {setCart(e.target.value)}}>Add to Cart</Button>
        </div> 

      </div>

    </div>
    </>       
  );
}