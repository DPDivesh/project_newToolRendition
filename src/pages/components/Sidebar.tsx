/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SplashLoginPage } from "./SplashLoginPage";

const Sidebar = (props: any) => {
  const { data: session } = useSession();
  let userInfoImage: any = session?.user?.image;
  const pathname = usePathname();

  if (session) {
    return (
      <div className="max-w-1 ">
        <div className="flex flex-col">
          <Link href={"/"} className="">
            {" "}
            Home
          </Link>
          <Link href={"../Accounts"} className="mt-10">
            Accounts
          </Link>
          <Link href={"../Alerts"} className=" mt-10">
            Alerts
          </Link>
          <Link href={"../Demo"} className=" mt-10">
            Demo
          </Link>
        </div>
        {/* image  */}
      </div>
    );
  }
  return (
    <>
      <SplashLoginPage />
    </>
  );
};
export default Sidebar;
