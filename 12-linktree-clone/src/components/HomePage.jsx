'use client'

import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";
import isMobile from "is-mobile";
import { useEffect } from "react"


export default function HomePage({ data }) {

  if (isMobile) {
    useEffect(() => {


      const rick = document.getElementById("roll");

      document.body.addEventListener('touchstart', () => {

        rick.click()
      })


    }, [])
  }



  return (
    <div className="flex flex-col  items-center justify-center mt-15 px-8">

      <a id="roll" href="https://www.instagram.com/rick_roll_memes/reel/CGh4a0iASGS/" className="hidden">hahah</a>
      <Image

        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
        className="rounded-full"


      />

      <h1 className="font-semibold text-2xl mt-4 mb-8" > {data.name} </h1>


      {
        data.links.map(e => (
          <LinkCard key={e.href}  {...e} />
        ))

      }

      <div className="flex gap-6 mt-8 my-4">

        {

          data.socials.map(e => {
            if (e.href.includes("twitter")) {
              return (

                <a key={e.title} href={e.href} target="_blank" >
                  {/* <XIcon fontSize="large" /> */}
                  <FaTwitter size={32} />

                </a>
              )
            }
            if (e.href.includes("github")) {
              return (


                <a key={e.title} href={e.href} target="_blank" >
                  <FaGithub size={32} />
                </a>

              )
            }
          })

        }

      </div>


    </div>
  )
    ;
}


function LinkCard({ href, title, image }) {

  return (

    <a href={href} target="_blank" className="w-full max-w-3xl ease-in-out flex items-center  rounded-sm py-2 sm:py-1 p-1 hover:scale-105 shadow-sm shadow-white/23 transition-all mb-3  bg-slate-900">
      <div className="flex  w-full text-center">

        <div className="w-10 h-10">
          {image && (
            <Image

              className="rounded-sm h-10 w-10"
              alt={title}
              src={image}
              width={40}
              height={40}

            />
          )}
        </div>

        <h2 className="font-semibold w-full flex flex-col items-center text-center justify-center text-gray-200">
          {title}
        </h2>


      </div>
    </a>

  )

}