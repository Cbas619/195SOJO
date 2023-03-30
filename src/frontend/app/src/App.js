import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { EditMyAccount } from './pages/EditMyAccount';
import { Item } from './pages/Item';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Payment } from './pages/Payment';
import { Main } from './pages/Main';
import { Sell } from './pages/Sell';
import { Chat } from './pages/Chat'
import { Books } from './pages/categories/Books'
import { Clothing } from './pages/categories/Clothing';
import { Electronics } from './pages/categories/Electronics';
import { Entertainment } from './pages/categories/Entertainment';
import { General } from './pages/categories/General';
import { OfficeSupplies } from './pages/categories/OfficeSupplies';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/account" element={<Account/>}/>
    <Route path="/edit" element={<EditMyAccount/>}/>
    <Route path="/item" element={<Item/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/main" element={<Main/>}/>
    <Route path="/books" element={<Books/>}/>
    <Route path="/clothing" element={<Clothing/>}/>
    <Route path="/electronics" element={<Electronics/>}/>
    <Route path="/entertainment" element={<Entertainment/>}/>
    <Route path="/general" element={<General/>}/>
    <Route path="/officesupplies" element={<OfficeSupplies/>}/>
    <Route path="/sell" element={<Sell/>}/>
    <Route path="/chat" element={<Chat/>}/>
    </Routes>      
  );
}

export default App;
