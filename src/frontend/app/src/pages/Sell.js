import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";
import Form from 'react-bootstrap/Form';

export function Sell() {
    return (
        <>
        <MainNav />
        <MainCategories/>
        <div className="background-2">
            <h2 className="sellHeader">Sell Now!</h2>
            <div className="sellContainer">
                <div className="sellBackground">
                                <h3>Item Name</h3>
                                <h3>Photos</h3>
                                <h3>Description of item</h3>
                                <h3>Condition</h3>
                                

                                <h3>List Item</h3>
                            </div>
            </div>
            
            
        </div>
        </>
    );
}