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

      <div className="mainMessagesSection">
        <div id="mainMessagesHeader">Your messages</div>
        <div className="mainLine-1"></div>
        <div className="mainItemCardContainer">
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
          </div>
      </div>

      <div className="mainFeaturedSection">
        <div id="mainPageHeader">Featured Items</div>
        <div className="mainLine-1"></div>
        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Books for the brain | " linkHeader="See all books" categoryLink="/books"/>
          <div className="mainItemCardContainer">
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Math book" itemPrice="12" itemImage="/images/placeholder.png"/>
            </div>
          </div>
        </div>

        <div className="mainFeaturedCategoryContainer">
          <MainHeaders categoryHeader="Work with Supplies | " linkHeader="See all school supplies" categoryLink="/officesupplies" />
          <div className="mainItemCardContainer">
            <div className="mainItemCard">
            <MainItemCards itemName="Pencils" itemPrice="2" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Pencils" itemPrice="2" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Pencils" itemPrice="2" itemImage="/images/placeholder.png"/>
            </div>
            <div className="mainItemCard">
            <MainItemCards itemName="Pencils" itemPrice="2" itemImage="/images/placeholder.png"/>
            </div>
            
          </div>
          
        </div>
      </div>
      
      <br></br>
    </div>
    
    </>       
  );
}