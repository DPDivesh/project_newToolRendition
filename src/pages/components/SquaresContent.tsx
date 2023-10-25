import { useState, useEffect, useRef } from "react";
import InfoForm from "./InfoForm.tsx";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useOnClickOutside } from "usehooks-ts";

const SquaresContent = (props: any) => {
  const ref = useRef(null);

  const { data: session, status } = useSession();
  const [name, setName] = useState(props.data?.storeName);
  const [CashTotal, setCashTotal] = useState(props.data?.cashBalance);
  const [balanceAsOf, setBalanceAsOf] = useState(props.data?.balanceAsOf);
  const [lastCommunication, setLastCommunication] = useState(
    props.data?.lastCommunication
  );
  const [TerminalID, setTerminalID] = useState(props.data?.TerminalId);
  const [minCash, setMinCash] = useState(props.data?.minReload);
  const [update, setUpdate] = useState(false);
  // const refreshData = () => {
  //   setCashTotal(props.data.cashBalance);
  // };
  const handleClickOutside = () => {
    // Your custom logic here
    setUpdate(false);
    console.log("clicked outside");
  };
  const handleClickInside = () => {
    // Your custom logic here
    setUpdate(true);

    console.log("clicked inside");
  };

  useOnClickOutside(ref, handleClickOutside);

  const parentForm = (data: boolean) => {
    setUpdate(data);
  };

  const reloadUpdateHandler = (e: any) => {
    e.preventDefault();
    //need to figure out how to get specific terminal id in here

    axios.post("/api/routes/updateReloadAmount", {
      email: session?.user?.email,
      TerminalID: TerminalID,
      minCash: Intl.NumberFormat("en-US").format(e.target[0].value),
    });

    setMinCash(Intl.NumberFormat("en-US").format(e.target[0].value));
    setUpdate(false);
  };

  const minReloadHandler = (e: any) => {
    e.preventDefault();
    setMinCash(e.target.value);
  };

  // const updateHandler = () => {
  //   update ? setUpdate(false) : setUpdate(true);
  // };

  const withUpdateForm = (
    <div
      className="squares bg-white text-black my-4 max-w-xs rounded-lg border-gray-500 border-1 shadow-2xl m-0"
      ref={ref}
    >
      <div className="square-content flex flex-col mx-5 my-2">
        <h2 className="text-black">
          Name: <u>{name}</u>
        </h2>
        <h3>
          Current Balance:{" "}
          <span
            className={CashTotal <= minCash ? "text-red-500" : "text-green-500"}
          >
            {CashTotal}
          </span>
        </h3>
        <h3>
          Balance Update: <span style={{ color: "green" }}>{balanceAsOf} </span>
        </h3>
        <h3>
          <span style={{ color: "grey" }}>
            Last Update: {lastCommunication}
          </span>
        </h3>
        <h3>
          <span style={{ color: "grey" }}>ID: {TerminalID}</span>
        </h3>
        <h3>
          <span style={{ color: "grey" }}>Min Reload: {minCash}</span>
        </h3>
        <form id="minimal-reload" onSubmit={reloadUpdateHandler}>
          <InfoForm
            reload={minReloadHandler}
            parentFormFunction={parentForm}
            minCash={minCash}
          />
        </form>
      </div>
    </div>
  );

  const withoutUpdateForm = (
    <div
      onClick={handleClickInside}
      className="squares bg-white text-black my-4 max-w-xs rounded-lg border-gray-500 border-1 shadow-2xl m-0"
    >
      <div className="square-content flex flex-col mx-5 my-2">
        <h2 className="text-black">
          Name: <u>{name}</u>
        </h2>
        <h3>
          Current Balance:{" "}
          <span
            className={CashTotal <= minCash ? "text-red-500" : "text-green-500"}
          >
            {CashTotal}
          </span>
        </h3>
        <h3>
          Balance Update: <span style={{ color: "green" }}>{balanceAsOf} </span>
        </h3>
        <h3>
          <span style={{ color: "grey" }}>
            Last Update: {lastCommunication}
          </span>
        </h3>
        <h3>
          <span style={{ color: "grey" }}>ID: {TerminalID}</span>
        </h3>
        <h3>
          <span style={{ color: "grey" }}>Min Reload: {minCash}</span>
        </h3>
        <h4 className="text-center align-text-bottom">Click to Update</h4>
      </div>
    </div>
  );

  // setInterval(refreshData, 10000);

  return <>{update ? withUpdateForm : withoutUpdateForm}</>;
};

export default SquaresContent;
