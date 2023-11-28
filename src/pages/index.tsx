// import { date } from "date-fns/locale";
import ServerDataCall from "./components/ServerDataCall";
import React, { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { clsx } from "clsx";
import { useOnClickOutside } from "usehooks-ts";
// import '../styles/globals.css'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";
import BlurContext from "../store/user-blur-context";

function App() {
  const ref = useRef(null);
  const { data: session } = useSession();
  const [privacy, setPrivacy] = useState(false);
  const [buttonStat, setbuttonStat] = useState(true);

  const handleButton = () => {
    console.log("clicked");
    setbuttonStat(false);
  };
  const handleCloseButton = () => {
    console.log("clicked");
    setbuttonStat(true);
  };
  const handleClickOutside = () => {
    setbuttonStat(true);
    console.log("clicked outside");
  };

  const onPrivacyChange = (value: any) => {
    setPrivacy(value);
  };
  const blrValue = {
    privacySetting: privacy ? "true" : "false",
    onSettingUserPrivacy: onPrivacyChange,
  };
  useEffect(() => {}, [privacy]);
  useOnClickOutside(ref, handleClickOutside);

  if (session) {
    return (
      <>
        <div className="flex">
          <aside
            ref={ref}
            className={clsx(
              "h-screen absolute bg-slate-800 max-w-xs top-0 ",
              buttonStat && "hidden",
              !buttonStat && "z-50 "
            )}
          >
            <BlurContext.Provider value={blrValue}>
              <Sidebar handleCloseButton={handleCloseButton} />
            </BlurContext.Provider>
            {/* <UserInfo
              privacySetting={privacy}
              onSettingUserPrivacy={onPrivacyChange}
            /> */}
          </aside>
          {/* <Navbar
            privacySetting={privacy}
            onSettingUserPrivacy={onPrivacyChange}
          /> */}

          <main className="">
            <div
              className={clsx(
                !buttonStat && "h-screen  brightness-50 overflow-hidden"
              )}
            >
              <Navbar handleButton={handleButton} />
              <ServerDataCall privacySetting={privacy} userData={session} />
            </div>
          </main>
        </div>
      </>
    );
  } else {
    return <Navbar handleButton={() => {}} />;
  }
}
export default App;
