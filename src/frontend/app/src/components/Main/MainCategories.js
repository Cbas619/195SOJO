import '../../App.scss'
import { MainCategoryIcon } from './MainCategoryIcon'

export function MainCategories() {
    return(
        <>
        <div className='mainCategoryNav'>
            <MainCategoryIcon category="Books" categoryImg="/images/open-book.png" categoryLink="/books"/>
            <MainCategoryIcon category="Office Supplies" categoryImg="/images/supplies.png" categoryLink="/officesupplies"/>
            <MainCategoryIcon category="Electronics" categoryImg="/images/devices.png" categoryLink="/electronics"/>
            <MainCategoryIcon category="Clothing" categoryImg="/images/casual-t-shirt-.png" categoryLink="/clothing"/>
            <MainCategoryIcon category="Entertainment" categoryImg="/images/film-roll.png" categoryLink="/entertainment"/>
            <MainCategoryIcon category="General" categoryImg="/images/miscellaneous.png" categoryLink="/general"/>
        </div>
        
        </>
    );
}