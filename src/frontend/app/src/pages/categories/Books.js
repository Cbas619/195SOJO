import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";

export function Books() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <div className="categoryPageHeader">Books</div>
      <div className="categorySection">
        <div className="categoryItemCardContainer">
          <div className="categoryItemCard">
          <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
          </div>
          <div className="mainItemCard">
          <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
          </div>
        </div>        
      </div>

    </div>
    </>       
  );
}