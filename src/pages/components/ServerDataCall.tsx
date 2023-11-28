import Squares from "./Squares";
import React, { useEffect, useState, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import { useInterval, useIsFirstRender } from "usehooks-ts";
import { useIsMounted } from "usehooks-ts";

const ServerDataCall = (props: any) => {
  const [loadingState, setLoadingState]: any = useState(true);
  const [errorState, setErrorState]: any = useState(false);
  const [backendData, setBackendData]: any = useState({});
  const isFirst = useIsFirstRender();

  //bring the data call up higher to the index?
  useEffect(() => {
    isFirst && initializeLoadData();
  }, []);

  const delay: number = 592000;

  useInterval(
    () => {
      // Your custom logic here
      refreshData();
    },
    // Delay in milliseconds or null to stop it
    delay
  );

  const initializeLoadData = async () => {
    const res: any = await axios
      .post("/api/routes/FirstLoad", {
        email: `${props.userData.user.email}`,
      })
      .catch(function (error) {
        console.log(error);
      });
    setBackendData(res.data);
  };

  const refreshData = async () => {
    setLoadingState(true);

    const res: any = await axios
      .post("/api/routes/ProcessFiles", {
        email: `${props.userData.user.email}`,
      })
      .catch(() => {
        return setErrorState(true), console.log("Issue in process files");
      });
    console.log(res);
    if (res.data.length != 0) {
      setBackendData(res.data);
      setLoadingState(false);
      setErrorState(false);
    } else {
      setErrorState(true);
    }
  };
  const errorNotif = (
    <div
      className="flex items-center p-4  text-sm text-red-800  border-white bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 mr-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Danger alert!</span> Please correct your
        login info and try again.
      </div>{" "}
    </div>
  );

  return (
    <div className="bg-indigo-400 h-min-100vw w-min-100vw">
      {errorState ? errorNotif : false}

      {backendData.length == "undefined" ? null : (
        <div className={props.privacySetting ? "blur-sm" : "blur-none"}>
          <Squares backendData={backendData} />
        </div>
      )}
      {loadingState ? (
        <div
          className="text-xs text-center h-5 flex justify-center items-center font-medium leading-none text-center fixed inset-x-0
        bottom-0 text-blue-800 bg-blue-200  animate-pulse dark:bg-blue-900 dark:text-blue-200"
        >
          <svg
            className="animate-spin mr-3 h-4 w-4 text-blue-800"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"
              className="text-blue-800"
            />
            <path
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
              className="text-blue-800 spinner_ajPY"
            />
          </svg>
          Updating Values...
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default ServerDataCall;
