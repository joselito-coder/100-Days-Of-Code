'use client'

import { GiHotMeal } from "react-icons/gi"
import { useEffect, useState } from "react";
import Image from "next/image";
import gif from "./assets/loading.gif"

export default function Home() {

  const [currentMeal, setCurrentMeal] = useState({})

  const [overlayOpen, setOverlayOpen] = useState(false);

  // Things that I will be needing from the random meal api
  // https://www.themealdb.com/api/json/v1/1/random.php
  //          - LEFT side
  // Image Source
  // Category
  // Area
  // Tags
  // Ingredients

  //          - Right side
  // Dish Name
  // description/instructions


  const generateMeal = async () => {
    setOverlayOpen(true)

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json())

    const dish = response.meals[0]

    let ingredient, measurement;

    // parse the ingredients and quantities
    // the api gives you 20 ingredient
    let finalOutput = {}

    finalOutput.imageSrc = dish.strMealThumb
    finalOutput.category = dish.strCategory
    if (dish.strYoutube != "") {
      finalOutput.youtube = `https://www.youtube.com/embed/${dish.strYoutube.split("?v=")[1]}`
    } else {
      finalOutput.youtube = null;
    }

    finalOutput.instructions = dish.strInstructions
    finalOutput.name = dish.strMeal

    let ingredientsArray = []


    for (let i = 1; i <= 20; i++) {

      ingredient = `strIngredient${i}`
      measurement = `strMeasure${i}`

      // break if the ingredient is empty (rest of the will also be empty)
      if (dish.hasOwnProperty(ingredient) && dish[ingredient] === "") break

      if (dish.hasOwnProperty(ingredient) && dish[ingredient] != null) {
        // console.log("Yippie")
        ingredientsArray.push(`${dish[ingredient]} - ${dish[measurement]}`)
      }

    }

    finalOutput.ingredients = ingredientsArray


    setTimeout(() => {

      setOverlayOpen(false)
    }, 1500);


    console.log(dish)
    console.log(finalOutput)
    setCurrentMeal(finalOutput)

  }

  return (
    <>
      <div className={`${(overlayOpen) ? "flex" : "hidden"} items-center justify-center  bg-black/90 bg-black h-[100vh]  w-[100vw] absolute layout`}>

        <Image src={gif} height={600} width={800} className="rounded-lg" alt="loader" />

      </div>
      <div className="container mx-auto mt-3 p-4 ">

        <div className="meals flex flex-col gap-5 items-center justify-center">
          <h1 className="text-3xl font-bold">Feeling Hungry?</h1>
          <p className="text-xl my-2">Get a random Meal click below</p>
          <button onClick={generateMeal} className="bg-gray-500 text-white px-8 transition ease-in-out cursor-pointer hover:bg-gray-800 py-3 rounded-md ">Get Meal <GiHotMeal className="w-20 h-20 " /></button>
        </div>

        {
          Object.keys(currentMeal).length != 0 && (
            <>

              <div className="meals flex justify-around my-4 mt-8">
                <div className="left flex flex-col gap-5">
                  <Image height={400} width={400} alt={currentMeal.name} src={currentMeal.imageSrc} />

                  <p className="text-2xl" >Category: <span>{currentMeal.category}</span> </p>


                  <div className="ingredients">

                    <h2 className="font-bold text-3xl ">Ingredients</h2>

                    <ul className="text-left " >

                      {currentMeal.ingredients.map((e, index) => {
                        return (
                          <li key={index} className="my-3 text-xl list-disc pl-3 ml-8 marker:text-red-500 " >
                            {e}
                          </li>

                        )

                      })}
                    </ul>
                  </div>

                </div>

                <div className="right w-[60%]">
                  <div className="dishName">
                    <p className="text-white text-3xl font-bold my-3" >{currentMeal.name}</p>
                  </div>
                  <div className="content text-xl">
                    {currentMeal.instructions.split(".").map((e, index) => { if (e.trim().length == 0) return; else return (<p key={index} className="my-3">- {e}.</p>) })}
                  </div>
                </div>
              </div>

              {/* Video Section */}

              {currentMeal.youtube && (
                <div className="flex items-center justify-center my-4">
                  <iframe id="myIframe" width="800" src={currentMeal.youtube} height="600" allowFullScreen></iframe>
                </div>
              )
              }
            </>
          )
        }

      </div>
    </>
  );
}
