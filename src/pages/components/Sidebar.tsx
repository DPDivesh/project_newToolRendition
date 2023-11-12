/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SplashLoginPage } from "./SplashLoginPage";
import ToggleButton from "./ToggleButton";
const Sidebar = ({ handleCloseButton }: any, props: any) => {
  const { data: session } = useSession();
  let userInfoImage: any = session?.user?.image;
  const pathname = usePathname();

  if (session) {
    return (
      <div className=" ">
        {/* image  */}

        <div className="flex h-screen flex-col justify-between border-e bg-white">
          <div className="px-4 py-6">
            <div className="flex justify-between items-center">
              <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                ATM Info
              </span>
              <button className="h-20 relative group">
                <a className="rotate-180 inline-block rounded-full border border-indigo-400 bg-indigo-400 p-3 text-white hover:bg-transparent hover:text-indigo-400 focus:outline-none focus:ring active:text-indigo-500">
                  <span className="sr-only"> Minimize </span>

                  <svg
                    onClick={() => handleCloseButton("clicked")}
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <ul className="mt-6 space-y-1">
              <Link
                href={"/"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Home
              </Link>

              <li>
                <Link
                  href={"../Accounts"}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Accounts
                </Link>
              </li>

              <li>
                <Link
                  href={"../Alerts"}
                  className=" block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Alerts
                </Link>
              </li>

              <li>
                <Link
                  href={"../Demo"}
                  className=" block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Demo
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className=" block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Sign Out
                </button>
              </li>

              {/* <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Account </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Details
                      </a>
                    </li>

                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Security
                      </a>
                    </li>

                    <li>
                      <form action="/logout">
                        <button
                          type="submit"
                          className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                        >
                          Logout
                        </button>
                      </form>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>

          {/* <ToggleButton
            //find where to add additional component or solve (props,{handleCloseButton})
            privacySetting={props.privacy}
            onSettingUserPrivacy={props.onPrivacyChange}
          /> */}
          <div className="inline-flex  justify-evenly align-bottom rounded-lg border border-gray-100 bg-gray-100 ">
            <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
              Blur
            </button>

            <button className="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
              Unblur
            </button>
          </div>
          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
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
              <div className="h-10 w-10 rounded-full object-cover" />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {session!.user!.name}
                  </strong>

                  <span> {session!.user!.email} </span>
                </p>
              </div>
            </a>
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
};
export default Sidebar;
