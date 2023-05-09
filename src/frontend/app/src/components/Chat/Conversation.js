import { useEffect } from "react"
import React, {uesEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
//import { getUser } from "../../actions/getUserActions"
import { getUser } from "../../api/UserRequests"
import './Chat.scss'

const Conversation = ({data, currentUserId}) => {

    //the one I am currently talking to
    const[userData, setUserData] = useState(null)

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
 

    return (
        <>
        <div className="follower conversation">
            <div className="name" style={{fontSize: "2rem"}}>
                <span>{userData?.firstName} {userData?.lastName}</span>
                
            </div>
            <span>Item: </span>
        </div>
        <hr style={{width: '85%', border: '0.1px solid #4f4f4f'}}/>
        </>
    )
}

export default Conversation