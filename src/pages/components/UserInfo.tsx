import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const UserInfo = (props: any) => {
  const { data: session } = useSession();
  let userInfoImage: any = session?.user?.image;
  const pathname = usePathname();

  return (
    <div className="bg-slate-800 h-3/6">
      <div className=" w-full flex flex-col  items-end self-center">
        <div className="flex">
          <div>
            <Image
              src={userInfoImage}
              width="125"
              height="125"
              alt="profile avatar"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          {/* <Image
        className=" max-w-xs rounded-lg  shadow-md dark:shadow-gray-800 xl:max-w-sm"
        src={userInfoImage}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "70%",
          height: "70%",
        }}
      /> */}
          <div>
            <h1 className="text">Signed in as</h1>
            <h1>{session!.user!.email}</h1>
          </div>
        </div>
      </div>
      <div className="flex items-end my-2 justify-evenly  w-full ">
        {pathname == "/" ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            onClick={() =>
              props.privacySetting
                ? props.onSettingUserPrivacy(false)
                : props.onSettingUserPrivacy(true)
            }
          >
            Privacy
          </button>
        ) : (
          false
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded "
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};
export default UserInfo;
