'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves up slightly as you scroll

    return (


        <div ref={ref} className="relative h-[200vh] overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="fixed top-0 left-0 w-full h-screen -z-10"
            >
                <Image
                    src="/images/bg2.jpg"
                    alt="Backdrop"
                    fill
                    className="object-cover brightness-60"
                />
            </motion.div>

            {/* First Section with text */}
            <div className="h-screen flex flex-col items-center justify-center text-center gap-5">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-9xl capitalize font-bold text-red-950/45"
                >
                    devote
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-9xl capitalize font-bold text-red-950/45"
                >
                    Your
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-9xl capitalize font-bold text-red-950/45"
                >
                    Hearts
                </motion.p>

                <motion.div
                    className=' relative top-30 z-300'
                    initial={{ opacity:0, y:50 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.8, delay: 0.6}}
                >

                    <IoIosArrowDown size={64} className='absolute cursor-pointer z-300 ' />

                </motion.div>


            </div>


            {/* Second Section */}
            <div className="h-screen w-full relative">
                <Image
                    src="/images/bg3.jpg"
                    alt="Second Section"
                    fill
                    className="object-cover brightness-60"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-white/70 text-6xl font-bold"
                    >
                        Shinzō wo Sasageyo!
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}
