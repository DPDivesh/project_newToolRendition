/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SplashLoginPage } from "./SplashLoginPage";

export default function Component(props: any) {
  const { data: session } = useSession();
  let userInfoImage: any = session?.user?.image;
  const pathname = usePathname();

  if (session) {
    return (
      <div className="">
        <Image
          src={userInfoImage}
          width="156"
          height="156"
          alt="profile avatar"
        />

        <div className="">
          <Link href={"/"} className=" mr-10">
            {" "}
            Home
          </Link>
          <Link href={"../Accounts"} className="mr-10">
            Accounts
          </Link>
          <Link href={"../Alerts"} className=" mr-10">
            Alerts
          </Link>
          <Link href={"../Demo"} className=" mr-10">
            Demo
          </Link>
        </div>

        <div className="invisible sm:visible w-full flex flex-col justify-end self-center">
          <h1 className="self-end mr-5">Signed in as {session.user!.email}</h1>
          <div className="flex justify-end my-2">
            {pathname == "/" ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit self-end mr-8 mt-2"
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit self-end mr-8  "
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <SplashLoginPage />
    </>
  );
}
