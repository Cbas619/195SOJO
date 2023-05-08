import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MainNav } from "../components/Main/MainNav";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


export function EditMyAccount() {

    const [state, setState] = useState("");
    const [showError, setShowError] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [user, setUser] = useState([])
    
    /*
    useEffect(() => {( async () => {
      try {
        const respo = await axios.get("http://localhost:4000/api/user/user", {
          withCredentials: true,
        });
        setUser(respo.data);
      } catch (error) {
        console.log(error.respo);
      }
    })();
  });

  */
    const onChange = async (data) => {
      const { firstName, lastName, email, password } = data;
      const putData = { firstName, lastName, email, password };
    }
    const edit = async (e) => {
        e.preventDefault(); 
        try {
          await axios.put(`http://localhost:4000/api/user/change/${user._id}`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }, {headers: {
            'Content-Type': 'application/json',
            'authorization':`bearer ${Cookies.get('jwt')}`
          }}).then((response, err) => {
          console.log("Successfully updated account!");
          navigate('/main');          
        })} catch (error){
          console.log(JSON.stringify(error));
        }
      };

      //handle submit
      const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target.value);
        const newPassword = data.get('newPassword');
        
        if (newPassword === password) {
          setShowError(true);
          setPasswordError("Password already exists!")
        }
        else {
          setShowError('');
        }

        if (newPassword !== password) {
          if (newPassword === '') {
            const editData = {
              firstName: data.get('firstName'),
              lastName: data.get('lastName'),
              email: email,
              password: data.get('password')
            };
            setShowError(false);
            onChange(editData);
          }
        }
      }

  return (
  <div>
<MainNav/> 
  <Container className='edit_text'>
       <h3>Edit Your Account</h3>
       <h4>Your Info</h4>
  <Form onSubmit={handleSubmit}>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstName">
          <Col>
          
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="firstName" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}}/>
          </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
          <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}}/>
          </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
              Email
           </Form.Label>
          <Col sm={15}>
          <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          </Col>
      </Form.Group>

      {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              Current Password (Does not work)
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group> */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalNewPassword">
          <Form.Label column sm={5}>
              New Password
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
          </Col>
      </Form.Group>
      {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5}>
              Confirm New Password (Does not work)
          </Form.Label>
          <Col sm={15}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
      </Form.Group> */}
      <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 5, offset: 15 }}>
              <Button type="submit" onClick={edit} >Save & updates</Button> 
          </Col>
       </Form.Group> 
  </Form>
  </Container>
  </div> //end div
   )
};
