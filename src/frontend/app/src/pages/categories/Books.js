import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";


export function Books() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <p className="categoryPageHeader">Books</p>
    <div>
        
        <div className="mainItemCard">
          <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
        </div>
        
      </div>

    </div>
    </>       
  );
}