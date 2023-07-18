import React from 'react';
import SquaresContent from './SquaresContent.tsx'


const Squares =(props:any)=>{

  return(
    <div className='bg-indigo-400'> 
   <div className="justify-items-center grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mx-50 ">
        {
          
        Array.from(props.backendData).map((data:any, index) =>{        
          return(
            <SquaresContent data={data} key={index} />
        )},

        )
        }
        
     
      </div>
      </div>
  )
          
      };


export default Squares;