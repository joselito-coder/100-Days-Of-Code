'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Spinner from './Spinner'

const AnimeCard = ({ imgUrl, title, description }) => {

    const [loading, setLoading] = useState(true)

    const handleLoaded = () => {

        setLoading(false);

    }



    return (
        <div className="container w-[510px]  justify-around bg-gray-900 mx-auto py-8 px-8 rounded-xl my-8 flex flex-col gap-8 items-center">
            {/* <div>AnimeCard</div> */}
            <div className="image">
                {
                    loading && <Spinner />

                }


                <Image
                    src={imgUrl}
                    alt={title}
                    className={`h-[400px] w-full  mx-auto object-contain object-center ${(loading)? "hidden" : "block"}`}
                    width={500}
                    height={400}
                    onLoad={()=> {handleLoaded()}}
                    priority

                />


            </div>
            <div className="title text-3xl"> {title}</div>
            <div className="content text-xl">{description}</div>
        </div>
    )
}

export default AnimeCard