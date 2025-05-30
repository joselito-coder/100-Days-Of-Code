'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Rick = ({ handleClick, position }) => {
    return (
        <div
            onClick={handleClick}
            style={{
                position: 'absolute',
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
            className="cursor-pointer"
        >
            <Image src="/rick.png" height={128} width={128} alt="Rick Astley" />
        </div>
    );
};

const Ricks = ({ score, setScore, isPlay,stopTimer }) => {
    const [position, setPosition] = useState({ top: 100, left: 100 });
    const [isVisible, setIsVisible] = useState(true);
    const [viewport, setViewport] = useState({ width: 420, height: 690 });
    const videoRef = useRef(null);

    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlay) {

            setViewport({ width: window.innerWidth, height: window.innerHeight });
            setRandomPosition();

            // Initialize audio
            audioRef.current = new Audio('/rick1.mp3');

            audioRef.current.play()
        }

    }, [isPlay]);

    const setRandomPosition = () => {
        const top = Math.floor(Math.random() * (viewport.height / 2 - 150));
        const left = Math.floor(Math.random() * (viewport.width - 350));
        setPosition({ top, left });
    };

    const handleClick = () => {

        if (score == 6) {
            
            if (videoRef.current) {
                // Request fullscreen


                setIsVisible(false)

                // videoRef.current.play()
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch((err) => {
                    console.warn("Autoplay failed:", err);
                });

                stopTimer();



            }
        }

        audioRef.current.pause()

        setScore((prev) => prev + 1);
        setIsVisible(false); // Hide current Rick

        setTimeout(() => {
            setRandomPosition();
            setIsVisible(true);

            // Restart and play audio
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        }, 500); // 1 second delay
    };

    return (
        <div className="relative w-full h-full">
            {isVisible && <Rick handleClick={handleClick} position={position} />}

            { (score == 6) && <video
                    ref={videoRef}
                    src="/rick.webm"
                    muted

                    autoPlay
                    className={` absolute h-[100vh] w-[100vw] z-200 left-0 right-0 top-0 bottom-0`}
                />
            }
        </div>
    );
};

export default Ricks;
