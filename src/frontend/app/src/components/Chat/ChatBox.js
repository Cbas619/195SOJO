import React, { useEffect , useRef, useState} from 'react'
import { getUser } from '../../api/UserRequests'
import './ChatBox.scss'
import { getMessages } from '../../api/MessageRequests'
import {format} from "timeago.js"
import InputEmoji from 'react-input-emoji'
import { addMessage } from '../../api/MessageRequests'



const ChatBox = ({chat, currentUser, setSendMessage, receivedMessage}) => {
    const[userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const scroll = useRef()
    
    

    //fetching data for user header when a user has already been clicked
    useEffect(() => {
        const userId = chat?.members?.find((id)=>id!==currentUser)
        const getUserData = async() => {
            try {
                const {data} = await getUser(userId)
                setUserData(data)
                //console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        };
        if(chat !== null) getUserData();
    }, [chat, currentUser])

    //fetching data for messages
    useEffect(() => {
        const fetchMessages = async() => {
            try {
                const {data} = await getMessages(chat._id);
                setMessages(data)
            } catch (error) {
                console.log(error)
            }
        };
        if(chat !== null) fetchMessages();
    }, [chat])


    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        }
        const receiverId = chat.members.find((id) => id !== currentUser);
        // send messaage to socket server
        setSendMessage({...message, receiverId})
        //send the message to mongodb
        try {
            const {data} = await addMessage(message);
            setMessages([...messages, data])
            setNewMessage("")
        } catch (error) {
            console.log(error);
        }

        
    }

    //receive message
    useEffect(() => {
        if(receivedMessage !== null && receivedMessage?.chatId===chat?._id) {
            setMessages([...messages, receivedMessage])
        }

    }, [receivedMessage])

    //scrolls to last message automatically
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <>
        <div className='ChatBox-container'>
            {/*If chat exists then return this */}
            {chat ? (
            <>
                <div className="chat-header">
                    <div className="follower">
                        <div className="name" style={{fontSize: "2rem"}}>
                            <span>{userData?.firstName} {userData?.lastName}</span>
                        </div>
                    </div>
                    <hr style={{width: '85%', border: '0.1px solid #4f4f4f'}}/>
                </div>

                <div className="chat-body">
                    {messages.map((message) => (
                        <>
                        <div ref = {scroll} className= {message.senderId === currentUser ? "message own" : "message"}>
                            <span>{message.text}</span>
                            <span>{format(message.createdAt)}</span>
                        </div>
                        </>
                    ))}
                </div>
                
                <div className="chat-sender">
                    <div>+</div>
                    <InputEmoji
                    value = {newMessage}
                    onChange = {handleChange}
                    />
                    <div className="send-button button" onClick={handleSend}>Send</div>
                </div>        
            </>
            
            ) : (
                <span className = "chatbox-empty-message">
                    Select a chat to start messaging...
                </span>
            )}
            
        </div>
        </>
    )
}

export default ChatBox