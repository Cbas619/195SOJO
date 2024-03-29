
import  {useState} from 'react';
import { useEffect } from 'react';
import "./Chat.scss";
import {useDispatch, useSelector } from 'react-redux';
//import { getCurrentUser } from '../../actions/currentUserAction';
import { getCurrentUser } from '../../api/UserRequests';
import { getUsers } from '../../actions/userActions';
import { getUser } from '../../actions/getUserActions';
//import { getChats } from '../../actions/chatsAction';
import Conversation from './Conversation';
import { userChats } from '../../api/ChatRequests';
import ChatBox from './ChatBox';
import axios from 'axios';
import {MainCategories} from '../Main/MainCategories'
import { useParams, useNavigate  } from "react-router-dom";
import {io} from 'socket.io-client'
import { useRef } from 'react';

export function Chat() {

    const dispatch = useDispatch();
    
    //we're gonna need to get current user somehow
    //const {loading, user, error} = useSelector((state) => state.user);
    const[user, setUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [chats, setChats] = useState([]);
    //const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef()
    const [sendMessage, setSendMessage] = useState(null)
    const [receivedMessage, setReceivedMessage] = useState(null);
    const { conversationId } = useParams();
    const navigate = useNavigate();
    const [currentChat, setCurrentChat] = useState(null);
    /*
     useEffect(() => {
      dispatch(getUser("642a25017b5368ffeac45c87"))
    }, [dispatch]);
    */



    useEffect(() => {
        (async () => {
          try {
            const {data} =  await getCurrentUser();
            setUser(data)
          } catch (error) {
            //console.log(error.respo);
          }
        })();
      },[]);

      
        //console.log("THE USAHH", user._id)
      
      
  
    useEffect(() => {
        const getChats = async () => {
          try {
            const { data } = await userChats(user._id);
            setChats(data);
          } catch (error) {
            console.log(error);
          }
        };
        getChats();
      }, [user._id]);


      //socket initialize
      useEffect(() => {
        socket.current = io("http://localhost:8800");
        socket.current.emit('new-user-add', user._id);
        socket.current.on("get-users", (users) => {
          setOnlineUsers(users);
        });
        socket.current.on("receive-message", (data) => {
          console.log(data);
          setReceivedMessage(data);
        });
      }, [user]);
      
    



    
    useEffect(() => {
      const selectChatByConversationId = () => {
        if (conversationId && chats.length > 0) {
          const selectedChat = chats.find((chat) => chat._id === conversationId);
          setCurrentChat(selectedChat);
        }
      };
  
      selectChatByConversationId();
    }, [conversationId, chats]);
  
    useEffect(() => {
      if (sendMessage !== null) {
        socket.current.emit('send-message', sendMessage);
      }
    }, [sendMessage]);
  
    const selectChat = (chat) => {
      setCurrentChat(chat);
      navigate(`/chat/${chat._id}`);
    };
  
/*
    //console.log(user);

    const {chats} = useSelector(state => state.chats);

    useEffect(() => {
        dispatch(getChats("642a25017b5368ffeac45c87"))
    }, [dispatch])

    const [currentChat, setCurrentChat] = useState(null)
 */

  return (
    <>

    <br></br>
    <div className="Chat"> 
        <div className="Left-side-chat">
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                    {chats.map((chat) => (
                        <div onClick={() => selectChat(chat)}>
                            <Conversation data={chat} currentUserId={user._id} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

        <div className="Right-side-chat">
            <div style={{width: '100%', alignSelf: 'flex-end'}}>
               <ChatBox chat={currentChat} currentUser = {user._id} setSendMessage={setSendMessage} receivedMessage = {receivedMessage}/>
            </div>
        </div>

    </div>
    </>       
  );
}