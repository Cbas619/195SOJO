import { MainNav } from "../components/Main/MainNav";
import { MainHeaders } from "../components/Main/MainHeaders"
import { MainCategories } from "../components/Main/MainCategories";
import { MainItemCards } from "../components/Main/MainItemCards";


export function Main() {
  return (
    <>
    <div className="background-1">
      <MainNav/> 
      <MainCategories/>
      
      <div>
        <MainHeaders categoryHeader="Books for the brain | " categoryLink="/books"/>
        <div className="mainItem">
          <MainItemCards itemName="Math book" itemPrice="12"/>
        </div>
      </div>

      <div>
        <MainHeaders categoryHeader="Work with Supplies | " categoryLink="/officesupplies"/>
        <div className="mainItem">
          <MainItemCards itemName="Pencils" itemPrice="2"/>
        </div>
        
      </div>


      <br></br>
    </div>
    
    </>       
  );

}