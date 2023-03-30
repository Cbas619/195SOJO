
import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";
import  {useState} from 'react';
import { useEffect } from 'react';

export function General() {
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
      <div className="categoryPageHeader">General</div>
      <div className="categorySection">
        <div className="categoryItemCardContainer">
        {state.map((item, i) => (
            <div className="mainItemCard">
            <MainItemCards itemName={state[i].productName} itemPrice={state[i].price} itemImage={state[i].image}/>
            </div>
        ))}
        </div>        
      </div>

    </div>
    </>       
  );

}