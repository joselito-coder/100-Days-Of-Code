import React from 'react'
require("dotenv").config();




const Quiz = () => {

  // process.env.quizApiKey

  return (
    <div>
      <div className="question h-69 bg-slate-500 flex items-center justify-center px-4 py-4  text-2xl w-[70%] mx-auto rounded-sm">
        This is a Question

      </div>
      <div className="options flex flex-wrap justify-center gap-4 mt-4  w-[85%] mx-auto">
        {Array(4).fill(4).map((e, index) => {
          console.log(e,index)
          return (
            <div className='h-20 cursor-pointer bg-red-500 rounded-sm flex items-center justify-center flex-1/3' key={index} > {index + 1} </div>
          )
        })}

      </div>

    </div>

  )
}

export default Quiz