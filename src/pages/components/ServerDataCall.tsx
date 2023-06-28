import Squares from "./Squares";
import React,{useEffect,useState,useRef} from "react";
import { PrismaClient } from '@prisma/client';
import axios, { AxiosResponse } from 'axios'




 const ServerDataCall = (props:any)=>{

  
    const [state,setState]:any = useState("Loading");
    
      const [backendData,setBackendData]:any = useState({});
      const timer = setTimeout(() => {
        refreshData()
        console.log("refreshing")
  
      }, 9000)
      
     
    useEffect(() => {
    initializeLoadData()
    timer
     
      }, [])

      const initializeLoadData =async()=>{
        // const res:any = await axios.post('/api/routes/FirstLoad', {email: `${props.userData.user.email}`}).catch((err)=>(console.log(err)))


        const res:any = await  axios.post('/api/routes/FirstLoad', {
          email:`${props.userData.user.email}`
        }).catch(function (error) {
          console.log(error);
        });
        console.log(res)
        setBackendData(res.data);


        // console.log("responseeeee", res.data)
        // const data = await res.json();
  
      }

      const refreshData=async()=>{
        // console.log(props.userData.user.email,"userEmail")
        // const res = await fetch("/api/routes/ProcessFiles",{
        //   method:'POST',
        //   body:JSON.stringify({email:`${props.userData.user.email}`}),
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }
        // }).catch((err)=>{console.log(err)})
        // alert(`${props.userData.user.email}`)
        const res:any = await axios.post('/api/routes/ProcessFiles', {email: `${props.userData.user.email}`}).catch((err)=>(console.log(err)))
        // console.log("responseeeee", res.data)
        // const data = await res.json();
        setBackendData(res.data);
      //  console.log('Fetching data...',res);

       }
    
    
    
    
      return(
        <>
        {props.privacySetting ?   <Squares backendData={backendData}/>:<div className="blur-sm"><Squares backendData={backendData}/> </div>}
        </>

      )
    
    
    
        
     
    
    
        
    
    

         

    
}

export default ServerDataCall;