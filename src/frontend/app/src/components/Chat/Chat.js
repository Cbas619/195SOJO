
import  {useState} from 'react';
import { useEffect } from 'react';
import "./Chat.scss";
import {useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/currentUserAction';
import { getUsers } from '../../actions/userActions';
import { getUser } from '../../actions/getUserActions';
//import { getChats } from '../../actions/chatsAction';
import Conversation from './Conversation';
import { userChats } from '../../api/ChatRequests';
import ChatBox from './ChatBox';
import axios from 'axios';
import {io} from 'socket.io-client'
import { useRef } from 'react';

export function Chat() {

    const dispatch = useDispatch();
    
    //we're gonna need to get current user somehow
    const {loading, user, error} = useSelector((state) => state.user);
    const [currentUser, setCurrentUser] = useState({});
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef()
    const [sendMessage, setSendMessage] = useState(null)
    const [receiveMessage, setReceiveMessage] = useState(null)
    
    /*
     useEffect(() => {
      dispatch(getUser("642a25017b5368ffeac45c87"))
    }, [dispatch]);
    */



    useEffect(() => {
        (async () => {
          try {
            const respo = await axios.get("http://localhost:4000/api/user/user", {
              withCredentials: true,
            });
            setCurrentUser(respo.data)
            //console.log(respo);
          } catch (error) {
            console.log(error.respo);
          }
        })();
      },[]);

  
    useEffect(() => {
        const getChats = async () => {
          try {
            const { data } = await userChats(currentUser._id);
            setChats(data);
          } catch (error) {
            console.log(error);
          }
        };
        getChats();
      }, [currentUser]);


      //socket initialize
    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", currentUser._id)
        socket.current.on("get-users", (users)=> {
            setOnlineUsers(users);
        })
    }, [currentUser])

    //sends meesage to socket server
    useEffect(() => {
        if(sendMessage!==null) {
            socket.current.emit('send-message', sendMessage)
        }
    }, [sendMessage])


    //recieve message from socket server
    useEffect(() => {
        socket.current.on("receive-message", (data) => {
        setReceiveMessage(data)
        })
    }, [])

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
                        <div onClick={() => setCurrentChat(chat)}>
                            <Conversation data={chat} currentUserId={currentUser._id} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

        <div className="Right-side-chat">
            <div style={{width: '100%', alignSelf: 'flex-end'}}>
               <ChatBox chat={currentChat} currentUser = {currentUser._id} setSendMessage={setSendMessage} receiveMessage = {receiveMessage}/>
            </div>
        </div>

    </div>
    </>       
  );
}