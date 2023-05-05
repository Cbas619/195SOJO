// import { HomeNav } from "../components/Home/HomeNav";
// import  {useState} from 'react';
// import { useEffect } from 'react';

// export function Chat() {

//     const [chats, setChats] = useState([]);
//     const [user, setUser] = useState([]);

//     useEffect(() => {
//         getChats()
//         getUser()
//     }, [])

//     const getChats = async () => {
//         try {
//             fetch(`http://localhost:4000/api/chat/${user.id}`)
//         .then(response => response.json())
//         .then(res => setChats(res))
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const getUser = async () => {
//         try {
//             fetch("http://localhost:4000/api/user/user")
//         .then(response => response.json())
//         .then(res => setUser(res))
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     console.log(chats);
//     console.log(user);

//   return (
//     <>
//     <HomeNav/> 
//     <h1>Chat</h1>
//     {chats.map((item, i) => (
//           // state[i].price === 400 &&
//             <div className="mainItemCard">
//             {/* <MainItemCards itemName={state[i].productName} itemPrice={state[i].price} itemImage={state[i].image}/> */}
//             </div>
//         ))}
//     </>       
//   );
// }