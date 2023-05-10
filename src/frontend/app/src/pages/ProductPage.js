import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { MainNav } from '../components/Main/MainNav';


export function Product() {
    return (
        <div className="product-page">
            
            <div>
                <h5>{productName}</h5>
                <p>${price}</p>
                <div>
                    <image>{image}</image></div>
                <div>
                    <p>{description}</p>
                    <p>Sold By: {sellerId}</p>
                    <p>Rating: {rating}</p>
                </div>
                <button>Buy now</button>
            </div>
        </div>
    ); // end return
}