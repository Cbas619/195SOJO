import { FaSearch } from "react-icons/fa";
import './SearchBar.scss';
import React, {useState} from 'react';

export function SearchBar() {

    const [input, setInput] = useState("");
    
   // const fetchData = (value) => {
        //fetch
    //}

    const getData = async (value) => {
        try {
          fetch("http://localhost:4000/api/product/all")
         .then(response => response.json())
         .then((json)=> {
            const results = json.filter((product) => {
                return value && product && product.productName && product.productName.toLowerCase().includes(value);
            })
            console.log(results);
         })
        } catch (err) {
          alert(err.message)
        }
      }

    const handleChange = (value) => {
        setInput(value)
        getData(value)
    }

    return (
        <>
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Search for items" value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
        
        </>
    );
}