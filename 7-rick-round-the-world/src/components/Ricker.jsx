'use client'

import React, { useRef, useState } from 'react'
import { ParallaxLayer } from "@react-spring/parallax";
import { Parallax } from "@react-spring/parallax";
import styles from "@/css/home.module.css"
import Image from 'next/image';

const Ricker = () => {

    const paraRef = useRef();
    const [page,setPage] = useState(1);

    const togglePage = ()=>{

        paraRef.current.scrollTo(page)

        if(page >= 6){
            setPage(0)
        }else{
            setPage(page => page +1)
        }
    }


    return (
        <div>
            <Parallax pages={6} ref={paraRef} >

                <ParallaxLayer 
                    sticky={{start:0,end: 5}}
                    onClick={() => togglePage() }
                
                >
                    <img className={styles.rick} src={"/images/rickroll.gif"} />

                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0}
                    factor={1.3}
                    speed={1}

                >
                    <h2 className='flex relative z-200 h-full font-extrabold  w-screen items-center text-white bg-black/30 justify-center text-8xl'>Never gonna give you up</h2>
                    <Image fill alt='Anim' src={"/images/scene3.jpg"} />

                </ParallaxLayer>


                <ParallaxLayer

                    offset={1}
                    factor={1.2}
                    speed={.2}


                >
                    <h2 className='relative z-200 flex h-full font-extrabold  w-screen items-center text-white bg-black/30 justify-center text-8xl'>Never gonna let you down</h2>
                    <Image fill alt='Anim' className='w-screen' src={"/images/scene7.jpg"} />
                </ParallaxLayer>



                <ParallaxLayer

                    offset={2}
                    factor={1.3}
                    speed={.8}
                >
                    {/* <h2 className='flex h-full font-extrabold  w-screen items-center justify-center text-8xl'>Never gonna let you down</h2> */}
                    <h2 className='relative z-200 flex h-full font-extrabold  w-screen items-center text-white bg-black/30 justify-center text-8xl'>Never gonna Turn around</h2>
                    <Image fill alt='Anim' className='w-screen' src={"/images/scene6.jpg"} />
                </ParallaxLayer>



                <ParallaxLayer

                    offset={3}
                    factor={1.3}
                    speed={.2}

                >
                    {/* <h2 className='flex h-full font-extrabold  w-screen items-center justify-center text-8xl'>Never gonna let you down</h2> */}
                    <h2 className='relative z-200 flex h-full font-extrabold px-18 w-screen items-center text-white bg-black/30 justify-center text-8xl'> And Desert youu</h2>
                    <Image fill alt='Anim' className='w-screen' src={"/images/scene8.jpg"} />
                </ParallaxLayer>



                <ParallaxLayer

                    offset={4}
                    factor={1.2}
                    speed={1}
                >
                    {/* <h2 className='flex h-full font-extrabold  w-screen items-center justify-center text-8xl'>Never gonna let you down</h2> */}
                    <Image fill alt='Anim' className='w-screen' src={"/images/scene69.png"} />
                    <h2 className='relative z-200 flex h-full font-extrabold  w-screen items-center text-white bg-black/30 justify-center text-8xl'>Never Gonna Make you Cry</h2>
                </ParallaxLayer>

                <ParallaxLayer


                    offset={5}
                    factor={1.2}
                    speed={.2}
                    onClick={ () => paraRef.current.scrollTo(0)}
                >
                    <Image fill alt='Anim' className='w-screen' src={"/images/bg.png"} />
                    <h2 className='relative z-200 flex h-full font-extrabold  w-screen items-center text-white bg-black/30 justify-center text-8xl'>Just Gonna Say Goodbye</h2>
                </ParallaxLayer>





            </Parallax>

        </div>
    );

}

export default Ricker