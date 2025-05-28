'use client'

import React, { useEffect, useState } from 'react';

const Calender = ({ month, chosenColor,reset }) => {
  const [dayColors, setDayColors] = useState({});

  useEffect(()=>{

    setDayColors({})


  }, [reset])

  const handleClick = (index) => {
    setDayColors(prev => ({
      ...prev,
      [index]: chosenColor
    }));
  };

  

  const dateMapping = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };

  const isMonth = Object.entries(dateMapping).filter(([element]) =>
    RegExp(`${month.slice(0, 3)}`, "i").test(element)
  );

  const monthIndex = isMonth[0]?.[1] || 0;

  const date = new Date();
  const startDate = new Date(date.getFullYear(), monthIndex);
  const endDate = new Date(date.getFullYear(), monthIndex + 1, 0);

  let datesArray = new Array(35).fill(null);
  for (let i = 1; i <= endDate.getDate(); i++) {
    const index = startDate.getDay() + i;
    datesArray[index] = i;
  }

  return (
    <div className='bg-gray-700 rounded-xl'>
      <div className="month text-3xl text-center my-3 text-white">{month}</div>

      <div className="row dayOfWeek py-3 text-2xl gap-6 bg-white grid grid-cols-7 text-black px-4 max-w-md">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="days bg-gray-300 py-3 h-[320px] grid grid-cols-7 text-black px-3 gap-2 max-w-md">
        {
          datesArray.map((day, index) =>
            day ? (
              <button
                key={index}
                onClick={() => handleClick(index)}
                style={{ backgroundColor: dayColors[index] || "#6b7280" }} // fallback to gray-500
                className="cursor-pointer rounded-md p-2 px-3 text-white"
              >
                {day}
              </button>
            ) : (
              <div key={index}></div>
            )
          )
        }
      </div>
    </div>
  );
};

export default Calender;
