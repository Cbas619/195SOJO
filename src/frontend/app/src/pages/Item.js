import { HomeNav } from "../components/Home/HomeNav";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import  {useState} from 'react';

export function Item() {

  const navigate = useNavigate();
  const handleSubmit =(e) => {
    e.preventDefault();
    navigate('/payment');
    
  }
  const [cart, setCart] = useState("");

  return (
    <>
    <HomeNav/> 
    <h1>Item</h1>
    <Button onClick={handleSubmit} onChange={(e) => {setCart(e.target.value)}}>Add to Cart</Button>
    </>       
  );
}