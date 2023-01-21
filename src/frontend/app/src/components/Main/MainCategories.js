import '../../App.scss'
import { MainCategoryIcon } from './MainCategoryIcon'

export function MainCategories() {
    return(
        <>
        <div className='mainCategoryNav'>
            <MainCategoryIcon category="Books" categoryImg="/images/open-book.png"/>
            <MainCategoryIcon category="Office Supplies" categoryImg="/images/supplies.png"/>
            <MainCategoryIcon category="Electronics" categoryImg="/images/devices.png"/>
            <MainCategoryIcon category="Clothing" categoryImg="/images/casual-t-shirt-.png"/>
            <MainCategoryIcon category="Entertainment" categoryImg="/images/film-roll.png"/>
            <MainCategoryIcon category="General" categoryImg="/images/miscellaneous.png"/>
        </div>
        
        </>
    );
}