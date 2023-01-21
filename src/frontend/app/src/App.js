import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { Item } from './pages/Item';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Payment } from './pages/Payment';
import { Main } from './pages/Main';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/item" element={<Item/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/main" element={<Main/>}/>
    </Routes>      
  );
}

export default App;
