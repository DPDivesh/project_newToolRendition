import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user!.email}     <img
      src={session.user?.image}
     
      alt="Picture of the User"
    />
 <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}