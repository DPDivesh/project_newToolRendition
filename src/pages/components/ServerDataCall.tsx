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
      
      const testingBackEnd =[{
        "Terminal ID": "L647934",
        "Name": "LA BUENA MARKET",
        "Cash\nBalance": 540,
        "Bal Type": "T",
        "Est. Cash Out": 44926.04216770833,
        "Last\nCommunication": "12/23/22 19:57",
        "Last\nCash W/D": "12/23/22 19:57",
        "Reject\nBalance": 0,
        "Balance as of": "$660 as of 12/23/2022 11:03:51 AM",
        "Cassette 1": 640,
        "Cassette 2": 0,
        "Cassette 3": 0,
        "Cassette 4": 0
      },
    
        {
        "Terminal ID": "L688966",
        "Name": "LACON MINI MART",
        "Cash\nBalance": 1720,
        "Bal Type": "T",
        "Est. Cash Out": 44929.04216770833,
        "Last\nCommunication": "12/23/22 14:53",
        "Last\nCash W/D": "12/23/22 13:15",
        "Reject\nBalance": 0,
        "Balance as of": "$1,720 as of 12/23/2022 11:15:19 AM",
        "Cassette 1": 1720,
        "Cassette 2": 0,
        "Cassette 3": 0,
        "Cassette 4": 0
      },
      {
        "Terminal ID": "L688961",
        "Name": "MONA MART",
        "Cash\nBalance": 1140,
        "Bal Type": "T",
        "Est. Cash Out": 44930.04216770833,
        "Last\nCommunication": "12/23/22 15:30",
        "Last\nCash W/D": "12/23/22 15:30",
        "Reject\nBalance": 0,
        "Balance as of": "$1,160 as of 12/22/2022 11:35:36 AM",
        "Cassette 1": 1160,
        "Cassette 2": 0,
        "Cassette 3": 0,
        "Cassette 4": 0
      },
      {
        "Terminal ID": "L474792",
        "Name": "NICK SHELL SERVICE",
        "Cash\nBalance": 2620,
        "Bal Type": "T",
        "Est. Cash Out": 44932.04216770833,
        "Last\nCommunication": "12/23/22 18:19",
        "Last\nCash W/D": "12/23/22 18:19",
        "Reject\nBalance": 460,
        "Balance as of": "$2,840 as of 12/23/2022 11:33:18 AM",
        "Cassette 1": 2640,
        "Cassette 2": 0,
        "Cassette 3": 0,
        "Cassette 4": 0
      },
      {
        "Terminal ID": "LK561655",
        "Name": "CRENSHAW CRAVOR #2",
        "Cash\nBalance": 2780,
        "Bal Type": "T",
        "Last\nCommunication": "01/23/20 08:24",
        "Last\nCash W/D": "01/23/20 08:24",
        "Reject\nBalance": 0,
        "Balance as of": "$2,780 as of 1/23/2020 6:24:32 AM",
        "Cassette 1": 2800,
        "Cassette 2": 0,
        "Cassette 3": 0,
        "Cassette 4": 0
      },
      {
        "Terminal ID": "L474746",
        "Name": "ZACATES MARKET",
        "Cash\nBalance": 3100,
        "Bal Type": "T",
        "Est. Cash Out": 44937.04216770833,
        "Last\nCommunication": "12/23/22 16:16",
        "Last\nCash W/D": "12/23/22 14:45",
        "Reject\nBalance": 0,
        "Balance as of": "$3,160 as of 12/22/2022 4:17:44 PM",
        "Cassette 1": 3100,
        "Cassette 2": 0,
        "Cassette 3": 0,
        "Cassette 4": 0
      }
    ];
    
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