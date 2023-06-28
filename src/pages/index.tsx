// import { date } from "date-fns/locale";
import ServerDataCall from "./components/ServerDataCall"
import React,{useEffect,useState,useRef} from "react";
import { useSession } from "next-auth/react";
// import '../styles/globals.css'
import Navbar from "./components/Navbar"




function App(){
  const { data: session } =  useSession()
  const [privacy, setPrivacy] = useState(false);

  const onPrivacyChange =(value:any)=>{
    setPrivacy(value)
    console.log(value,privacy)

  }


  useEffect(() => {
    console.log(privacy,"useeffect");
  }, [privacy]);


     if(session){
      console.log(session);

      return(
        <div>
         
        <nav></nav>
        <div >
        <Navbar privacySetting={privacy} onSettingUserPrivacy={onPrivacyChange}/>

        <ServerDataCall privacySetting={privacy} userData={session}/>
        </div>
         </div>
      )
    }else{
      return(
      <Navbar/>
      )
    }
    

 }
export default App