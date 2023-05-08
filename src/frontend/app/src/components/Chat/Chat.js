
import  {useState} from 'react';
import { useEffect } from 'react';
import "./Chat.scss";

export function Chat() {

    const [chats, setChats] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        getChats()
        getUser()
    }, [])

    const getChats = async () => {
        try {
            fetch(`http://localhost:4000/api/chat/${user.id}`)
        .then(response => response.json())
        .then(res => setChats(res))
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async () => {
        try {
            fetch("http://localhost:4000/api/user/user")
        .then(response => response.json())
        .then(res => setUser(res))
        } catch (error) {
            console.log(error)
        }
    }

    console.log(chats);
    console.log(user);
 
  return (
    <>
    
    <br></br>
    <div className="Chat">
        <div className="Left-side-chat">
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                    Conversations
                </div>
            </div>
            
        </div>

        <div className="Right-side-chat">
            rightside
        </div>

    </div>
    </>       
  );
}