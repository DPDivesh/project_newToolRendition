import {React,useState,useEffect} from "react";
import InfoForm from "./InfoForm";

const SquaresContent =(props)=>{
  
  // const [backendData,setBackendData] = useState({});
  // console.log("1------------------------");
  // console.log(props.data,"props data");
  // console.log("2------------------------");

  const [name,setName] = useState(props.data.Name)
  const [CashTotal,setCashTotal] = useState(props.data.cashBalance)
  const [balanceAsOf,setBalanceAsOf] = useState(props.data.balanceAsOf)
  const [lastCommunication,setLastCommunication] = useState(props.data.lastCommunication)
  const [lastCashWD,setLastCashWD] = useState(props.data.lastCashWD)
  const [TerminalID,setTerminalID] = useState(props.data.TerminalID)
  const [minCash, setMinCash] = useState(props.data.minReload)
  const refreshData=()=>{
    
    setName(props.data.Name);
    setCashTotal(props.data.cashBalance);
  }

  const formSubmitHandler = ((e)=>{
    e.preventDefault();
    console.log(e.target[0].value);

    let postSubmit = {
      "TerminalID": TerminalID,
      "minReload": e.target[0].value,
      }

    fetch("http://localhost:5531/posts",{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postSubmit)
    }).then(async(response)=>{
      console.log(await response.json())
    })

  })

  const minReloadHandler =((e)=>{
    setMinCash(e.target.value)
    console.log(e.target.value)
  })

  setInterval(refreshData,10000)

  return(
    <div className="squares bg-white text-black rounded-2xl" key={props.index}  >
            <div className="square-content" >
            <h2><u>{name}</u></h2>
            <h3>Current Balance: <span style={{color:"green"}}>{CashTotal}</span></h3>
            <h3>Balance Update: <span style={{color:"green"}}>{balanceAsOf} </span></h3>
            <h3><span style={{color:"grey"}}>Last Update: {lastCommunication}</span></h3>
            <h3><span style={{color:"grey"}}>ID: {TerminalID}</span></h3>
            <h3><span style={{color:"grey"}}>Min Reload: {minCash}</span></h3>
            <form id="minimal-reload" onSubmit={formSubmitHandler}>
              <InfoForm reload={minReloadHandler} minCash={minCash}/>
            </form>
            </div>
    
          </div>

  )
          
      };


export default SquaresContent;