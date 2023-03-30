import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Logout = async (e) => {
    const navigate = useNavigate();
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:4000/api/auth/logout")
      .then((response, err) => {
      console.log(response);
      navigate('/main');
      
    })} catch (error){
      console.log(JSON.stringify(error));
    }
  };