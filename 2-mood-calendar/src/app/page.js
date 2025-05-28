'use client'

import { Frown, Laugh, Meh, Smile } from "lucide-react";
import Calender from "./components/Calender";
import { useState } from "react";

export default function Home() {


  const [color, setcolor] = useState("bg-gray-300")

  const [reset, setReset] = useState(0);


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <>

      <div className="container mx-auto">

        <button className="absolute right-15 top-15  rounded-full bg-amber-600 cursor-pointer p-4 text-xl" onClick={() => { setReset(reset + 1) }} > reset</button>

        <div className="colors my-8">
          <div className="text text-2xl text-center mt-8">Choose from below pallet</div>

          <div className="colorPallete flex gap-4 justify-center my-4">

            <div onClick={() => setcolor("#90ee90")} className="bg-green-400 text-gray-700 rounded-full cursor-pointer p-2"> <Laugh size={64} /> </div>
            {/* <Smile size={54} /> */}
            <div onClick={() => setcolor("#15803d")} className="bg-green-700 p-2 text-white rounded-full cursor-pointer"><Smile size={64} /></div>
            <div onClick={() => setcolor("#052e16")} className="bg-green-900 p-2 text-gray-200 rounded-full cursor-pointer"> <Meh size={64} /></div>
            <div onClick={() => setcolor("#ef4444")} className="bg-red-500 text-white  p-2 rounded-full cursor-pointer"><Frown size={64} /></div>


          </div>

        </div>



        <div className=" flex flex-wrap gap-8 items-center justify-center mt-3">

          {months.map((e, index) => {

            return (<Calender month={e} reset={reset} chosenColor={color} key={index} />)

          })}
        </div>
      </div>

    </>
  );
}
