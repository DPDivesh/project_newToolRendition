import ServerDataCall from "./components/ServerDataCall";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { clsx } from "clsx";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";

export function App() {
  const { data: session } = useSession();
  const [privacy, setPrivacy] = useState(false);
  const [buttonStat, setbuttonStat] = useState(true);

  const UpdateSideMenuState = (value: any) => {
    setbuttonStat(value);
  };

  const onPrivacyChange = (value: any) => {
    setPrivacy(value);
  };

  useEffect(() => {}, [privacy]);

  if (session) {
    return (
      <>
        // How would I have the child component update the state of the parent
        component with updateSideMenuState?
        <Navbar buttonStatus={UpdateSideMenuState} />
        <div className="flex">
          <aside
            className={clsx(
              "h-screen sticky z-50 bg-slate-800 max-w-xs top-0 ",
              buttonStat && "hidden"
            )}
          >
            <Sidebar />
            <UserInfo
              privacySetting={privacy}
              onSettingUserPrivacy={onPrivacyChange}
            />
          </aside>
          {/* <Navbar
                privacySetting={privacy}
                onSettingUserPrivacy={onPrivacyChange}
              /> */}
          <main>
            <ServerDataCall privacySetting={privacy} userData={session} />
          </main>
        </div>
      </>
    );
  } else {
    return <Navbar />;
  }
}
