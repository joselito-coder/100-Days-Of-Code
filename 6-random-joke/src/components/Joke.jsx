'use client'

import React, { useEffect, useState } from 'react'

const Joke = () => {

    const [joke, setJoke] = useState({})
    const [jokeType, setJokeType] = useState("");

    const handleClick = () => {

        getJoke();
        console.log(joke)

    }

    const getJoke = async () => {
        const joke = await fetch("https://v2.jokeapi.dev/joke/Programming").then(e => e.json())

        setJoke(joke);


    }

    useEffect(() => {

        getJoke()

    }, [])



    return (
        <>

            <div className={`bg-slate-600 shadow-2xl ${ (Object.keys(joke).length == 0 ) ? "blur-xs" :"" } shadow-purple-300/40  border-white border flex mx-auto  items-center gap-10 mt-8 py-14 flex-col  w-[70vw] justify-center  rounded-3xl`}>
                {/* <div className="joke h-[300px] flex items-center justify-center text-white text-4xl px-10 "></div> */}
                <div className="container">

                    {

                        joke && (joke?.type == "single") ? <div key={joke.id} className={`joke mb-4 w-[80%] mx-auto flex text-center items-center text-4xl justify-center text-white  px-10 `}>{joke.joke}</div>
                            :
                            <div className="harambe">
                                <div key={joke.id} className={`joke mb-7 flex items-center justify-center text-white  px-10 text-4xl font-normal`}>{joke.setup}</div>
                                <div key={joke.id + 69} className={`joke mb-4 flex items-center justify-center text-white  px-12 text-2xl font-bold italic `}>{joke.delivery}</div>
                            </div>

                    }
                </div>
                <button className="btn bg-black/69  p-4 rounded-lg cursor-pointer" onClick={() => handleClick()}> Get a new one</button>
            </div>

        </>
    )
}

export default Joke