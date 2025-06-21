
import React, { useLayoutEffect, useRef } from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'  


const Intro = () => {

    const backgroundImage = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start:"top",
                end: "+500px",
                scrub: true,
            }
        })

        timeline
        .from(backgroundImage.current, {clipPath: "inset(15%)"})
        .to(introImage.current,{height:"200px"},0)

    },[])


    return (
        <div className={styles.intro}>

            <div  ref={backgroundImage} className="bgImage brightness-60  absolute  top-0 h-[140vh] w-full">
                <Image
                    src={"/images/raani.webp"}
                    fill
                    className='object-cover'
                    alt='Background Image'
                />
            </div>

            <div className="introContainer flex items-center justify-center mt-[35vh]">
                <div  ref={introImage} data-scroll data-scroll-speed="0.3"  className="introImage w-[350px] h-[475px] absolute">
                    <Image
                        src={"/images/elenora.jpg"}
                        fill
                        className='object-cover object-top'
                        alt='Background Image'
                    />
                </div>
                <h1  data-scroll data-scroll-speed="0.7" className='z-30 text-white text-9xl font-bold'>Bleed Weapons</h1>
            </div>

        </div>
    )
}

export default Intro