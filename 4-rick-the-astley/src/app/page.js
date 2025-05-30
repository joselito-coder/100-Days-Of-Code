'use client'

import { Play } from "lucide-react";
import Game from "./components/Game/Game";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const gameRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {

    setIsRunning(true)
    gameRef.current.scrollIntoView({ behavior: 'smooth' });

  }


  useEffect(() => {

    window.addEventListener("wheel", (e) => {

      e.preventDefault();

    }, { passive: false })

  }, [])

  return (
    <>
      <div className={`flex flex-col items-center justify-around gap-4  bg-black text-white h-[100vh] w-full `}>

        <h1 className="text-4xl px-3 text-center">Stop Rick Astleys' from from Taking over</h1>

        <div onClick={() => handleClick()} className="flex items-center justify-center cursor-pointer px-4 w-40 bg-gray-500 py-4 rounded-lg  ">
          <Play size={32} className="inline mr-4 cursor-pointer" />
          <p className="text-2xl font-bold cursor-pointer">Start</p>
        </div>

        <p className="text-2xl">
          Gotta Give EM ALL UP
        </p>
      </div>

      <Game gameRef={gameRef} isRunning={isRunning} setIsRunning={setIsRunning} />
    </>
  )
}
