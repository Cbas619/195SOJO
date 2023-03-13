import { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit } from "react-icons/md";


export function Account() {


   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [email, setEmail] = useState();


 return (
   <div className="container-fill d-flex flex-column gap-5">
     <h1>My Account</h1>
     <div className="d-flex gap-4 align-items-center">
       <AiOutlineUser style={{ fontSize: "13ch" }} />
       <h5>Hi, SOJO!</h5>
     </div>


     <div>
       <div className="d-flex gap-3 align-items-baseline">
         <h4>Contact Info</h4>


         <Link
           className="d-flex align-items-center gap-2 fw-bold text-black"
           to="/profile"
         >
           <MdEdit />
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
 );
}
