'use client'

import { useState } from "react";
import { AsyncComp } from "./components/AsyncComp";
import { NormalComp } from "./components/NormalComp";

export default function Home() {
  const [isTrue, setIsTrue] = useState(false)

  console.log({ isTrue })

  return (
    <main className="flex h-screen justify-center items-center bg-gray-800">
      <div className="flex flex-col">
        {/** @ts-expect-error Async Server Component */}
        <AsyncComp />

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
