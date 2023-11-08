import React, { useState } from "react";
import SquaresContent from "./SquaresContent.tsx";

const Squares = (props: any) => {
  const arrayOfSquares =
    props.backendData && Array.isArray(props.backendData)
      ? props.backendData.map((data: any, index: number) => (
          <SquaresContent data={data} key={index} />
        ))
      : null;

  return (
    <div>
      <div className="justify-items-center grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-screen xl:grid-cols-4 mx-50  ">
        {arrayOfSquares}
      </div>
    </div>
  );
};

export default Squares;
