import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'  

const Projects = () => {

  const [selected, setSelected] = useState(0);

  const imgRef = useRef();

  const projects = [
    {
      title: "Elenora's Pole Blade",
      src: "poleblade.webp"
    },

    {
      title: "Reduvia Blood blade",
      src: "reduvia.png"
    },

    {
      title: "Rivers of Blood",
      src: "rivers.png"
    },

    {
      title: "Nagakiba",
      src: "nagakiba.jpg"
    },


  ]

  useLayoutEffect( ()=>{

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: imgRef.current,
      start: "-100px",
      end: document.body.offsetHeight,
      pin:true
    })

  },[])



  return (
    <div className='projects flex flex-col mt-[24vh] mb-8'>

      <div className="projectDescription flex h-[700px] gap-25 w-full justify-between px-8">
        <div ref={imgRef}  className="imageContainer relative  z-20 w-[40%] mx-auto  h-full">
          <Image
            src={`/images/${projects[selected].src}`}
            fill
            className='object-cover'
            alt='Weapon'
          />
        </div>

        <div className="column w-[400px] text-xl flex">
          Bleed weapons in Elden Ring are designed to inflict Hemorrhage, a status effect that builds with each strike. Once triggered, it causes massive damage based on a percentage of the enemy’s max health.
        </div>
        <div className="column w-[30%] text-xl flex items-end mr-3">
         These weapons—like Rivers of Blood or Reduvia—excel in aggressive playstyles, often scaling with Arcane to maximize bleed buildup. Fast attacks rapidly stack Hemorrhage, overwhelming enemies before they can react. Talismans like Lord of Blood’s Exultation amplify their power further when blood is shed. While devastating against living foes, bleed weapons are less effective against those without blood, such as constructs or spectral enemies, requiring flexible tactics for resistant encounters. 
        </div>



      </div>


        <div className="projectList mt-[200px] flex flex-col container mx-auto ">

            {
              projects.map( (projects, index)=>{

                return (<div className='flex justify-end text-7xl font-semibold border-t border-white border-solid' key={`p_${index}`} > 

                  <p onMouseOver={ ()=> setSelected(index) } className='mt-8 mb-2 cursor-pointer'>{projects.title}</p>
                
                </div>)

              })
            }

        </div>



    </div>
  )
}

export default Projects