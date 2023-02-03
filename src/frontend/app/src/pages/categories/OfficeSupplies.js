import { MainNav } from "../../components/Main/MainNav";
import { MainCategories } from "../../components/Main/MainCategories";
import { MainItemCards } from "../../components/Main/MainItemCards";

export function OfficeSupplies() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <p className="categoryPageHeader">Office Supplies</p>
    <div>
        
        <div className="mainItemCard">
          <MainItemCards itemName="Pencils" itemPrice="2" itemImage="/images/placeholder.png"/>
        </div>
        
      </div>

    </div>
    </>       
  );
}