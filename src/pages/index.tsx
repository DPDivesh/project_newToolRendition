// import { date } from "date-fns/locale";
import ServerDataCall from "./components/ServerDataCall";
import React, { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
// import '../styles/globals.css'
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import UserInfo from "./components/UserInfo";
function App() {
  const { data: session } = useSession();
  const [privacy, setPrivacy] = useState(false);

  const onPrivacyChange = (value: any) => {
    setPrivacy(value);
  };

  useEffect(() => {}, [privacy]);

  if (session) {
    return (
      <div className="flex">
        <aside className="h-screen sticky bg-slate-800 top-0">
          <Sidebar
            privacySetting={privacy}
            onSettingUserPrivacy={onPrivacyChange}
          />
          <UserInfo />
        </aside>
        {/* <Navbar
          privacySetting={privacy}
          onSettingUserPrivacy={onPrivacyChange}
        /> */}
        <main>
          <ServerDataCall privacySetting={privacy} userData={session} />
        </main>
      </div>
    );
  } else {
    return <Navbar />;
  }
}
export default App;
