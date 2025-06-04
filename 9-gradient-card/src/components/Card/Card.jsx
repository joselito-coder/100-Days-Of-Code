import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    // <div>Card</div>
    <div className="cardWrapper h-[600px] w-[420px] ">

      <div className="cardContent flex flex-col items-center  p-4  text-md">
        {/* lal la la la ELMOS world */}

        <div className="image w-full mb-12 ">
          <Image height={200} width={480} alt='elmo' className='h-[250px] w-[80%] mx-auto' src={"/elmo.gif"} />
        </div>

        <div className="container flex flex-col h-full gap-8 px-5 items-center">
          <div className="title text-3xl">
            Elmo's World
            
          </div>
          <div className="content text-lg">
            Elmo loves to play and sing with all his friends! Elmo thinks sharing is super duper fun, and when we help each other, we make the world a happier place! Hahaha! Elmo says don’t forget to laugh, learn, and give big hugs every day. Yay, friends!"          </div>


        </div>

      </div>

    </div>
  )
}

export default Card