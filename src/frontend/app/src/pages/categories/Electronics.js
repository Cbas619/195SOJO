import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";

export function Electronics() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <p className="categoryPageHeader">Electronics</p>
    <div>
        
        <div className="mainItemCard">
          <MainItemCards itemName="MacBook Air" itemPrice="300" itemImage="/images/placeholder.png"/>
        </div>
        
      </div>

    </div>
    </>       
  );
}