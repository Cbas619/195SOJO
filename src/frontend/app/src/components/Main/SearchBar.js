import { FaSearch } from "react-icons/fa";
import './SearchBar.scss';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export function SearchBar() {

    /*
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
    */

    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(query ? `/search/?query=${query}` : '/search');
    };

    return (
        <>
        <Form className="input-wrapper" onSubmit={submitHandler}>
            <FaSearch id="search-icon" type="submit"/>
            <input placeholder="Search for items" onChange={(e) => setQuery(e.target.value)}/>
        </Form>
        
        </>
    );
}