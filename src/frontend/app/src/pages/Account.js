import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { MainNav } from "../components/Main/MainNav";
import { useEffect } from 'react';
import axios from "axios";


export function Account() {
  const [account, setAccount] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  



  //connect API from backend
  useEffect(() => {( async () => {
    try {
      const respo = await axios.post("http://localhost:4000/api/user", {
        withCredentials: true,
      });
      const [ firstName, lastName, email] = respo.data;
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      
    } catch (error) {
      console.log(error.respo);
    }
  })();
},);

  //navigate to edit page
  const navigate = useNavigate();
  const editClick = () => {
    navigate('/edit', {
      state: {
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email
      }
    });
  }
  
 return (
  <>
  <MainNav/> 
    <div className="container-fill d-flex flex-column gap-5">
      <h1>My Account</h1>
        <div className="d-flex gap-4 align-items-center">
        <AiOutlineUser style={{ fontSize: "13ch" }} />
      <h5>Hi, {firstName}!</h5>
    </div>


     <div>
       <div className="d-flex gap-3 align-items-baseline">
         <h4>Contact Info</h4>


         <Link
           className="d-flex align-items-center gap-2 fw-bold text-black"
           to="/edit" editClick={editClick}
         >
           <MdEdit  />
           Edit
         </Link>
       </div>


       <div className="d-flex flex-wrap gap-3 align-items-center">
         <p style={{ flex: "1 1 30ch" }}>First Name: {firstName}</p>
         <p style={{ flex: "1 1 30ch" }}>Last Name: {lastName}</p>
         <p style={{ flex: "1 1 30ch" }}>Email: {email}</p>
       </div>
     </div>
   </div>
   </>
 );
}
