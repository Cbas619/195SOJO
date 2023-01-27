import { MainNav } from "../components/Main/MainNav";
import { MainHeaders } from "../components/Main/MainHeaders"
import { MainCategories } from "../components/Main/MainCategories";
import { MainItemCards } from "../components/Main/MainItemCards";


export function Main() {
  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      
      <div>
        <MainHeaders categoryHeader="Books for the brain | " categoryLink="/books"/>
        <div className="mainItemCard">
          <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
        </div>
      </div>

      <div>
        <MainHeaders categoryHeader="Work with Supplies | " categoryLink="/officesupplies" />
        <div className="mainItemCard">
          <MainItemCards itemName="Pencils" itemPrice="2" itemImage="/images/placeholder.png"/>
        </div>
      </div>

      


      <br></br>
    </div>
    
    </>       
  );
}