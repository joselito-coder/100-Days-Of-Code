'use client'

import Description from "@/components/Description";
import Intro from "@/components/Intro";
import Weapons from "@/components/Weapons";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll();




    })();




  }, [])



  return (

    <main className="m-0 p-0" >

      <Intro />
      <Description />
      <Weapons />

    </main>


  );
}
