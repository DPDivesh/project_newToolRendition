/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SplashLoginPage } from "./SplashLoginPage";

type NavbarProps = {
  handleButton: (arg: string) => void;
};

export default function Navbar({ handleButton }: NavbarProps) {
  const { data: session } = useSession();
  let userInfoImage: any = session?.user?.image;
  const pathname = usePathname();

  if (session) {
    return (
      <div className="w-screen sticky  top-0 border z-40 bg-white ">
        <div>
          <button
            onClick={() => handleButton("clicked")}
            className="h-20 relative group"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-0 ring-gray-300">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-gray-600 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                <div className="bg-gray-600 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-gray-600 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-black h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-black h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* <Image
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
        </div> */}
      </div>
    );
  }
  return (
    <>
      <SplashLoginPage />
    </>
  );
}
