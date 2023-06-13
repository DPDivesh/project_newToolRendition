/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

export default function Component() {
  
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="w-full bg-gray-800 flex bg-gray-800   border-black border-1 shadow-2xl m-0 ">    
       <img src={session.user?.image} alt="Picture of the User"/>
 <div className="flex text-start flex-col ml-10 justify-center ">
 <button className="self-center mr-10">Accounts</button>

        
      </div>
      <div className=" w-full flex flex-col justify-end self-center">
      <h1 className="self-end mr-5">Signed in as {session.user!.email}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit self-end mr-8 mt-2" onClick={() => signOut()}>Sign out</button>
        
        
      </div>
      </div>
    )
    
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}