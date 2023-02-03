import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";

export function Clothing() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <p className="categoryPageHeader">Clothing</p>
    <div>
        
        <div className="mainItemCard">
          <MainItemCards itemName="Gucci Shirt" itemPrice="99" itemImage="/images/placeholder.png"/>
        </div>
        
      </div>

    </div>
    </>       
  );
}