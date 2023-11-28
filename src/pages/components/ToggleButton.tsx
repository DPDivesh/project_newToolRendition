import BlurContext from "@/store/user-blur-context";
import clsx from "clsx";
import { useContext, useState } from "react";

// className={clsx(
//   "h-screen absolute bg-slate-800 max-w-xs top-0 ",
//   buttonStat && "hidden",
//   !buttonStat && "z-50 "
// )}

const ToggleButton = (props: any) => {
  const { privacySetting, onSettingUserPrivacy } = useContext(BlurContext);
  const [privacy, setPrivacy] = useState(false);
  return (
    <div className="block px-4 py-2 text-sm font-medium flex mt-auto justify-center  ">
      <button
        onClick={() => {
          privacy ? setPrivacy(false) : setPrivacy(true);

          !privacy ? onSettingUserPrivacy(true) : onSettingUserPrivacy(false);
        }}
        className="inline-block w-11/12 py-2 text-sm rounded-md focus:relative bg-gray-100  text-blue-500"
      >
        {!privacy ? <>Blur</> : <>Unblur</>}
      </button>

      {/* <button
        onClick={() => {
          onSettingUserPrivacy(false);
          setPrivacy(false);
        }}
        className={clsx(
          "inline-block rounded-md w-1/4  px-4 py-2 z-50 text-sm shadow-sm focus:relative",
          !privacy && "text-blue-500 bg-white"
        )}
      >
        Unblur
      </button> */}
    </div>
  );
};
export default ToggleButton;
