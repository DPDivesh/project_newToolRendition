import React, { useState } from 'react';
import SquaresContent from './SquaresContent.tsx'


const Squares =(props:any)=>{


  const arrayOfSquares = props.backendData && Array.isArray(props.backendData)
  ? props.backendData.map((data: any, index: number) => (
      <SquaresContent data={data} key={index} />
    ))
  : null;

  
  return(
    <div className='bg-indigo-400'> 
   <div className="justify-items-center grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mx-50 ">
        {
          arrayOfSquares
       
        }
        
     
      </div>
      </div>
  )
          
      };


export default Squares;