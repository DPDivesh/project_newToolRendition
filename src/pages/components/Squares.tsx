import React from 'react';
import SquaresContent from './SquaresContent'


const Squares =(props:any)=>{

  // const [backendData,setBackendData] = useState({});
console.log(props.backendData)


  return(
   <div className="flex justify-evenly flex-col bg-white ">
        {
          
        Array.from(props.backendData).map((data, index) =>{        
          {console.log(props.backendData);}
          return(
            <SquaresContent data={data} key={index} />
        )},

        )
        }
        
     
      </div>

  )
          
      };


export default Squares;