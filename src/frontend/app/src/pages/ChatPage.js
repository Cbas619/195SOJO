import { MainNav } from "../components/Main/MainNav";
import  {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { MainItemCards } from "../components/Main/MainItemCards";
import { Chat } from "../components/Chat/Chat";
import { MainCategories } from "../components/Main/MainCategories";

export function ChatPage() {


  return (
    <>
    <MainNav/> 
    <MainCategories/>
    <div className="background-1">
      <Chat/>
    </div>
    

    </>       
  );
}