import { useState } from "react";
import { MainCategories } from "../components/Main/MainCategories";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { MainNav } from "../components/Main/MainNav";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const styles = {
    background: {
    backgroundColor: 'white',
    //width: '14.9vw',
    height: '100vh',
    paddingLeft: '90px',
    paddingTop: '30px',
    borderRadius: '10px'
    }
  }

  //connect to backend
  useEffect(() => {
    (async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
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
      <MainCategories />
      <div className="background-1">
      <div className="ordersPageContainer">
      <Container style={styles.background}>
      <div className="container-fill d-flex flex-column gap-5">
      <div className="ordersPageHeader">My Account</div>
                <div className="orderLine-1"></div>
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
        </Container>
        </div>
      </div>
    </>
  );
}
