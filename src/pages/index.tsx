// import { date } from "date-fns/locale";
import ServerDataCall from "./components/ServerDataCall"
import React,{useEffect,useState,useRef} from "react";
import { useSession } from "next-auth/react";
// import '../styles/globals.css'
import LoginBtn from "./components/LoginBtn"




function App(){
  const { data: session } =  useSession()

  


     if(session){
      console.log(session);

      return(
        <div>
         
        <nav></nav>
        <div >
        <LoginBtn/>
        <ServerDataCall userData={session}/>
        </div>
         </div>
      )
    }else{
      return(
      <LoginBtn/>
      )
    }
    

 }
export default App