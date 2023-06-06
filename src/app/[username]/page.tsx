'use client'

import { AsyncComp } from "../components/AsyncComp";

import { useState } from "react";

export default function Home() {
  const { username } = useParams();
  
  const [isTrue, setIsTrue] = useState(false)

  console.log({ isTrue })

  return (
    <main className="flex h-screen justify-center items-center bg-gray-800">
      <div className="flex flex-col">
        {/** @ts-expect-error Async Server Component */}
        <AsyncComp isTrue={isTrue} username={username}/>

        {/* <NormalComp /> */}

        <p className="text-orange-400">{String(isTrue)}</p>

        <button
          type="button"
          className="bg-green-500 p-2 rounded mt-4"
          onClick={() => setIsTrue(prevState => !prevState)}
        >
          toggle true
        </button>
      </div>
    </main>
  )
}
function useParams(): { username: any; } {
  throw new Error("Function not implemented.");
}

