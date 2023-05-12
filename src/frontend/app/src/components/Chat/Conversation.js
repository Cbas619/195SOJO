import { useEffect } from "react"
import React, {uesEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
//import { getUser } from "../../actions/getUserActions"
import { getUser } from "../../api/UserRequests"
import './Chat.scss'
import { getProduct } from "../../api/ProductRequests"

const Conversation = ({data, currentUserId}) => {

    //the one I am currently talking to
    const[userData, setUserData] = useState(null)
    const[product, setProduct] = useState()

    //console.log(currentUserId)

    //useSelector

    useEffect(() => {
        const userId = data.members.find((id)=>id!==currentUserId)
        const getUserData = async() => {
            try {
                const {data} = await getUser(userId)
                setUserData(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        };
        getUserData();
    }, [])

    useEffect(() => {
        const productId = data.productId
        const getProductData = async() => {
            try {
                const {data} = await getProduct(productId)
                setProduct(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        };
        getProductData();
    }, [])
 

    return (
        <>
        <div className="follower conversation">
            <div className="name" style={{fontSize: "2rem"}}>
                <span>{userData?.firstName} {userData?.lastName}</span>
                
            </div>
            { product ? (
                <><span>Item: {product.productName}</span> </>
            ) : ( <></>)}
            
        </div>
        <hr style={{width: '85%', border: '0.1px solid #4f4f4f'}}/>
        </>
    )
}

export default Conversation