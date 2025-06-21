import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'  

const Description = () => {

    const phrases = [
        "The moon hath watched over countless nights, yet none so sacred as this. Come, let us step beyond fate’s reach, into a realm unclaimed by gods or men.",
        "The stars whisper secrets not meant for the waking world. With thee, I seek not a throne… but eternity, adrift in the void’s gentle hush.",
        "Abandon the golden light, and take my hand. Together, we shall wander where no grace dare shine, beneath the stillness of an endless night."
    ];


    return (
        <div className='relative z-30 text-3xl mt-[55vh]' >
            {phrases.map((e, index) => {

                return <AnimatedText key={index}>{e}</AnimatedText>

            })}

        </div>
    )
}

function AnimatedText({ children }) {

    const text = useRef(null);

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(text.current,{
            scrollTrigger:{
                trigger: text.current,
                start: "0px bottom",
                scrub:true,
                end: "bottom+=400px bottom",
            },
            left:"-200px",
            opacity:0
        })
        
    })

    return (
        <p ref={text} className='relative px-20 mx-auto w-[70%] my-4 font-bold' >{children}</p>
    )
}

export default Description