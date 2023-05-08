import { HomeNav } from "../components/Home/HomeNav";
import  {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { MainItemCards } from "../components/Main/MainItemCards";
import { Chat } from "../components/Chat/Chat";

export function ChatPage() {

/*     const [chats, setChats] = useState([]);
    const [user, setUser] = useState([])

//     useEffect(() => {
//     (async () => {
//       try {
//         const respo = await axios.get("http://localhost:4000/api/user/user", {
//           withCredentials: true,
//         });
//         setUser(respo.data);
//       } catch (error) {
//         console.log(error.respo);
//       }
//     })();
//   });

  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setUser(respo.data);
      } catch (error) {
        console.log(error.respo);
      }
    })();
    getChats()
  });

    // useEffect(() => {
    //     getChats()
    // }, [])

    const getChats = async () => {
        try {
            fetch(`http://localhost:4000/api/chat/${user._id}`)
        .then(response => response.json())
        .then(res => setChats(res))
        } catch (error) {
            console.log(error)
        }
    } */

  return (
    <>
    <HomeNav/> 
    <Chat/>

    </>       
  );
}