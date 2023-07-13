import Squares from "./Squares";
import React,{useEffect,useState,useRef} from "react";
import { PrismaClient } from '@prisma/client';
import axios, { AxiosResponse } from 'axios'




 const ServerDataCall = (props:any)=>{

  
    const [loadingState,setLoadingState]:any = useState(true);
    const [errorState, setErrorState]:any = useState(false);
    const [backendData,setBackendData]:any = useState({});
      
      
 
    
    useEffect(() => {
      console.log("called")
    initializeLoadData()
    refreshData()

    const timer = setInterval(() => {
      errorState ? false:refreshData
      // console.log("refreshing")

    }, 660000)
    
    return () => clearInterval(timer);
    
     
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
        setLoadingState(true)
        console.log("refreshing")

        // console.log(props.userData.user.email,"userEmail")
        // const res = await fetch("/api/routes/ProcessFiles",{
        //   method:'POST',
        //   body:JSON.stringify({email:`${props.userData.user.email}`}),
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }
        // }).catch((err)=>{console.log(err)})
        // alert(`${props.userData.user.email}`)
        
        const res:any = await axios.post('/api/routes/ProcessFiles', {email: `${props.userData.user.email}`}).catch(()=>{return setErrorState(true), console.log("fail")})
        // console.log("responseeeee", res.data)
        // const data = await res.json();
        // setErrorState(false)
        console.log(res.data.length)
        if (res.data.length != 0){
          setBackendData(res.data);
          setLoadingState(false);
          setErrorState(false)

        }else{
          setErrorState(true)
        }
        // setBackendData(res.data);
        // setLoadingState(false);
      //  console.log('Fetching data...',res);

       }
    
    
    
    
      return(
        <>
        {errorState ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg border-white bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span><div>
    <span className="font-medium">Danger alert!</span> Please correct your login info and try again.
  </div> </div>  : false}
        <div className={props.privacySetting ? "blur-sm":"blur-none"}><Squares backendData={backendData}/> </div>
      {loadingState ? 
        <div className="text-xs text-center h-5 flex justify-center items-center font-medium leading-none text-center fixed inset-x-0
        bottom-0 text-blue-800 bg-blue-200  animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
         : false}
        

        </>

      )
    
    
    
        
     
    
    
        
    
    

         

    
}

export default ServerDataCall;