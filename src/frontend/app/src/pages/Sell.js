import { MainNav } from "../components/Main/MainNav";
import { MainCategories } from "../components/Main/MainCategories";

import { SellForm } from "../components/Sell/SellForm";

export function Sell() {
    return (
        <>
        <MainNav />
        <MainCategories/>
        <div className="background-2">
            <p className="sellHeader">List an item on the shop</p>
            <div className="sellContainer">
                <div className="sellBackground">
                    <SellForm/>
                </div>
            </div>
        </div>
        </>
    );
}