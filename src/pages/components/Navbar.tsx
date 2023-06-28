/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function Component(props:any) {

  
  const {data:session} = useSession()
  let userInfoImage:any = session?.user?.image
  const pathname = usePathname()
console.log(pathname);

  if (session) {
    return (
      <div className="w-full bg-gray-800 flex bg-gray-800   border-black border-1 shadow-2xl m-0 ">    
       <img src={userInfoImage} alt="Picture of the User"/>
 <div className="flex text-start flex-row ml-10 justify-center ">
  <Link href={"/"} className="self-center mr-10"> Home</Link>
 <Link href={"../Accounts"} className="self-center mr-10">Accounts</Link>
 <Link href={"../Alerts"} className="self-center mr-10">Alerts</Link>
 <Link href={"../Demo"} className="self-center mr-10">Demo</Link>

        
      </div>
      <div className=" w-full flex flex-col justify-end self-center">
      <h1 className="self-end mr-5">Signed in as {session.user!.email}</h1>
      <div className="flex justify-end">
      {pathname=="/" ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit self-end mr-8 mt-2" onClick={() => props.privacySetting ? props.onSettingUserPrivacy(false):props.onSettingUserPrivacy(true) }>Privacy</button>:false}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit self-end mr-8 mt-2" onClick={() => signOut()}>Sign out</button>
      </div>
      
        
      </div>
      </div>
    )
    
  }
  return (
    <div className="flex w-screen h-screen">
      <button onClick={()=>{signIn()}} className="px-4 m-auto py-2 border flex gap-2 border-white rounded-lg bg-white text-black h-fit hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
      <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
      <span>Login with Google</span>
      </button>
    </div>
  )
}