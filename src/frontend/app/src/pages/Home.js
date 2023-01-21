import { HomeInfo } from "../components/Home/HomeInfo";
import { MainNav } from "../components/Main/MainNav";
import { HomeIcons } from "../components/Home/HomeIcons";


export function Home() {
  return (
    <>
    <MainNav/> 
    <HomeInfo/>
    <HomeIcons/>
    </>       
  );
}