'use client'

import React, { useEffect, useRef, useState } from 'react'
import Ricks from '../Ricks/Ricks';

const Game = ({ gameRef, isRunning, setIsRunning }) => {
    const [timer, setTimer] = useState(0);
    const [score, setScore] = useState(0);
    const [timerText, setTimerText] = useState(`${timer}`)

    const intervalRef = useRef(null);


    const stopTimer = ()=>{

        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }

        console.log(intervalRef.current)

    }


    useEffect(() => {

        if (!isRunning) return;

        intervalRef.current = setInterval(() => {

            setTimer((timer) => timer + 1)

        }, 1000);

        return () => clearInterval(intervalId);

    }, [isRunning])

    useEffect(() => {

        if (timer < 60) {
            setTimerText(`${timer}`)
        } else {
            const mins = Math.floor(timer / 60);
            const secs = timer % 60;
            setTimerText(` ${mins}:${secs} `)
        }


    }, [timer])



    return (
        <div ref={gameRef} className="game h-[100vh]">
            {/* for score */}
            <div className="stats h-[14%] flex items-center justify-between px-8">

                <div className="time text-2xl"> <span className='font-bold mr-4'>Time:</span>  {timerText}</div>
                <div className="score text-2xl mr-4"> <span className='font-bold'>Score:</span> {score}</div>


            </div>

            {/* for game */}
            <div className='bg-pink-300 h-[86%] bg-[url("/bg.png")] bg-contain '>
                <Ricks stopTimer={stopTimer} score={score}  setScore={setScore} isPlay={isRunning} setIsPlay={setIsRunning} />

            </div>

        </div>

    )
}

export default Game