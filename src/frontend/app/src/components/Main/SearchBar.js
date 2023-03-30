import { FaSearch } from "react-icons/fa";
import './SearchBar.scss';

export function SearchBar() {
    return (
        <>
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search for items" />
        </div>
        
        </>
    );
}