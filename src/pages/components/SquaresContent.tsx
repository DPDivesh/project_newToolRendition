import {useState,useEffect} from "react";
import InfoForm from "./InfoForm.tsx";
import axios from "axios";
import { useSession } from "next-auth/react"

const SquaresContent =(props:any)=>{
  
  // const [backendData,setBackendData] = useState({});
  // console.log("1------------------------");
  // console.log(props.data,"props data");
  // console.log("2------------------------");
  const { data: session, status } = useSession()
  const [name,setName] = useState(props.data.storeName)
  const [CashTotal,setCashTotal] = useState(props.data.cashBalance)
  const [balanceAsOf,setBalanceAsOf] = useState(props.data.balanceAsOf)
  const [lastCommunication,setLastCommunication] = useState(props.data.lastCommunication)
  const [lastCashWD,setLastCashWD] = useState(props.data.lastCashWD)
  const [TerminalID,setTerminalID] = useState(props.data.TerminalId)
  const [minCash, setMinCash] = useState(props.data.minReload)
  const refreshData=()=>{
    

    setCashTotal(props.data.cashBalance);
  }

const reloadUpdateHandler = (e:any)=>{
  e.preventDefault()
console.log(e.target[0].value,"value");
//need to figure out how to get specific terminal id in here
console.log(session?.user.email, TerminalID)

axios.post("/api/routes/updateReloadAmount",{
  email:session?.user.email,
  TerminalID: TerminalID,
  minCash: minCash
})

//make a call to update using a route

}

  const minReloadHandler =((e:any)=>{
    e.preventDefault()
    setMinCash(e.target.value)
    console.log(e.target.value)
  })

  setInterval(refreshData,10000)

  return(

    <>
      {name != "undefined" ? <div className="squares bg-white text-black my-4 max-w-xs rounded-lg border-gray-500 border-1 shadow-2xl m-0" key={props.index}  >
            <div className="square-content flex flex-col mx-5 my-2" >
            <h2 className="text-black">Name: <u>{name}</u></h2>
            <h3>Current Balance: <span className={CashTotal<=minCash ? "text-red-500":"text-green-500"}>{CashTotal}</span></h3>
            <h3>Balance Update: <span style={{color:"green"}}>{balanceAsOf} </span></h3>
            <h3><span style={{color:"grey"}}>Last Update: {lastCommunication}</span></h3>
            <h3><span style={{color:"grey"}}>ID: {TerminalID}</span></h3>
            <h3><span style={{color:"grey"}}>Min Reload: {minCash}</span></h3>
            <form id="minimal-reload" onSubmit={reloadUpdateHandler}>

              <InfoForm reload={minReloadHandler} minCash={minCash}/>
              </form>

            </div>
    
          </div>: false }
    </>
    

  )
          
      };


export default SquaresContent;