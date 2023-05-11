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
import { ChatPage } from './pages/ChatPage'
import { Books } from './pages/categories/Books'
import { Clothing } from './pages/categories/Clothing';
import { Electronics } from './pages/categories/Electronics';
import { Entertainment } from './pages/categories/Entertainment';
import { General } from './pages/categories/General';
import { SchoolSupplies } from './pages/categories/SchoolSupplies';
import { PaymentConfirmation } from './pages/PaymentConfirmation';
import { RequireAuth } from 'react-auth-kit';
import { OrdersPage } from './pages/OrdersPage';
import SearchScreen from './pages/SearchScreen';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/account" element={
    <RequireAuth loginPath='/login'><Account/>
    </RequireAuth>}/>
    <Route path="/edit" element={
    <RequireAuth loginPath='/login'><EditMyAccount/>
    </RequireAuth>}/>
    <Route path="/item/:_id" element={
    <RequireAuth loginPath='/login'><Item/>
    </RequireAuth>}/>
    <Route path="/singleorder/:_id" element={
    <RequireAuth loginPath='/login'><Item/>
    </RequireAuth>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/payment/:_id" element={
    <RequireAuth loginPath='/login'><Payment/>
    </RequireAuth>}/>
    <Route path="/main" element={
    <RequireAuth loginPath='/login'><Main/>
    </RequireAuth>}/>
    <Route path="/books" element={
    <RequireAuth loginPath='/login'><Books/>
    </RequireAuth>}/>
    <Route path="/clothing" element={
    <RequireAuth loginPath='/login'><Clothing/>
    </RequireAuth>}/>
    <Route path="/electronics" element={
    <RequireAuth loginPath='/login'><Electronics/>
    </RequireAuth>}/>
    <Route path="/entertainment" element={
    <RequireAuth loginPath='/login'><Entertainment/>
    </RequireAuth>}/>
    <Route path="/general" element={
    <RequireAuth loginPath='/login'><General/>
    </RequireAuth>}/>
    <Route path="/schoolsupplies" element={
    <RequireAuth loginPath='/login'><SchoolSupplies/>
    </RequireAuth>}/>
    <Route path="/search" element={<SearchScreen/>}/>
    <Route path="/sell" element={
    <RequireAuth loginPath='/login'><Sell/>
    </RequireAuth>}/>
    <Route path="/chat" element={
    <RequireAuth loginPath='/login'><ChatPage/>
    </RequireAuth>}/>
    <Route path="/orders" element={
    <RequireAuth loginPath='/login'><OrdersPage/>
    </RequireAuth>}/>
    <Route path="/edit" element={
    <RequireAuth loginPath='/login'><EditMyAccount/>
    </RequireAuth>}/>
    <Route path="/paymentconfirmation" element={
    <RequireAuth loginPath='/login'><PaymentConfirmation/>
    </RequireAuth>}/>
    </Routes>     
  );
}

export default App;
