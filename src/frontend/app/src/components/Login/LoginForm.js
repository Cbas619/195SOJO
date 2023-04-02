import '../../App.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSignIn } from 'react-auth-kit';
import { LoginAPI } from '../../api/AuthRequests';

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch
  const signIn = useSignIn()

  const login = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
      email: email,
      password: password
    // }, { withCredentials: true }).then((response, err) => {
    //   console.log(response);
    //   navigate('/main');
      })
      console.log(res)
      signIn({
        token: res.data,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: {email: email}})
        navigate('/main');
    } catch (error){
      console.log(JSON.stringify(error));
    }
  };
  return (
    <Row>
      <Col>
    <Form className='container'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={login}>
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    
  );
}