import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";

export function Entertainment() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <p className="categoryPageHeader">Entertainment</p>
    <div>
        
        <div className="mainItemCard">
          <MainItemCards itemName="Board Game" itemPrice="20" itemImage="/images/placeholder.png"/>
        </div>
        
      </div>

    </div>
    </>       
  );
}