'use client'

import React, { useEffect, useState } from 'react'




const Quiz = () => {

  const url = "http://localhost:3000/api/quiz";

  const [quizData, setQuizData] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [curQuestionIndex, setCurQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [revealAnswers, setRevealAnswers] = useState(false);


  useEffect(() => {


    const getData = async () => {

      const data = await fetch(url).then(e => e.json())

      setQuizData(data);

    }


    getData();

  }, [])



  useEffect(() => {
    if (quizData) {

      const question = structuredClone(quizData[curQuestionIndex])

      let outputArr = []

      const { answers, correct_answers } = question;

      for (let i = 0; i < 4; i++) {
        outputArr.push({ question: Object.values(answers)[i], isCorrect: Object.values(correct_answers)[i] })
      }

      setOptions(outputArr)
      setCurrentQuestion(question)


    }

  }, [quizData])


  const boolCheck = (str) => {
    return str === "true" ? true : false;
  }

  const getNext = () => {

    setRevealAnswers(false);


    if(curQuestionIndex >= 10){
      return;
    }

    const question = structuredClone(quizData[curQuestionIndex + 1])
    setCurrentQuestion(question);

    let outputArr = []
    const { answers, correct_answers } = question;
    for (let i = 0; i < 4; i++) {
      outputArr.push({ question: Object.values(answers)[i], isCorrect: Object.values(correct_answers)[i] })
    }

    setOptions(outputArr);

    setCurQuestionIndex(e => e + 1);


  }


  const checkAnswer = (isCorrect) => {

    // console.log(isCorrect)

    setRevealAnswers(true);

    // if(boolCheck(isCorrect)){
    //   alert("Correct")
    // }else{
    //   alert("Incorrect!!")
    // }

  }



  return (

    <div>

      {
        currentQuestion &&

        <div>


          <div className="question h-69  bg-slate-500 flex items-center justify-center px-18 py-4  text-2xl w-[70%] mx-auto rounded-sm">
            {currentQuestion.question}


          </div>
          <div className="options flex flex-wrap justify-center gap-4 mt-8  w-[85%] mx-auto">
            {options.length > 0 && options.map((e, index) => {
              console.log(e, index)
              return (
                <div onClick={() => checkAnswer(e.isCorrect)} className={`h-20 cursor-pointer ${(revealAnswers) ? (boolCheck(e.isCorrect)) ? "bg-green-700" : "bg-red-700" : "bg-slate-800"} rounded-sm flex items-center justify-center flex-1/3`} key={index} > {e.question} </div>
              )
            })}

          </div>

          <div className="nextBtn">

            <button onClick={() => getNext()} className="block mx-auto mt-14 cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

          </div>

        </div>
      }
    </div>

  )
}

export default Quiz