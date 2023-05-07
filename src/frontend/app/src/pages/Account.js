import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { MainNav } from "../components/Main/MainNav";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  //connect to backend
  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user", {
          withCredentials: true,
        });
        console.log("res", respo);

        setFirstName(respo.data.firstName);
        setLastName(respo.data.lastName);
        setEmail(respo.data.email);
        setId(respo.data._id);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  //navigate to edit page
  const navigate = useNavigate();
  const editClick = () => {
    navigate("/edit", {
      state: {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
    });
  };

  return (
    <>
      <MainNav />
      <div className="container-fill d-flex flex-column gap-5">
        <h1>My Account</h1>
        <div className="d-flex gap-4 align-items-center">
          <AiOutlineUser style={{ fontSize: "13ch" }} />
          <h5>Hi, {firstName}!</h5>
        </div>

        <div>
          <div className="d-flex gap-3 align-items-baseline">
            <h4>Contact Info</h4>

            <button
              className="d-flex align-items-center gap-2 fw-bold text-black"
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={editClick}
            >
              <MdEdit />
              Edit
            </button>
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
