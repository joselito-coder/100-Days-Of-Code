'use client'

import React, { useState } from 'react'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);


    const resetBoard = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true)
    }

    const handleClick = (i) => {

        if (calculateWinner(squares) || squares[i]) {
            return;
        }


        const nextSquares = squares.slice();
        if (xIsNext) {

            nextSquares[i] = "X";
        } else {

            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setXIsNext(!xIsNext)



    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }else if(squares.filter(e=> e=='X' || e=="O").length == 9){
        status = "Tie"
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }


    return (

        <>
            <h2 className="text-3xl mb-8">{status}</h2>

            <div className="board-row flex   gap-1 mb-1 w-42">
                <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
                <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
                <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
            </div>
            <div className="board-row  flex gap-1 mb-1 w-42">
                <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
                <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
                <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
            </div>
            <div className="board-row flex gap-1 mb-1 w-42">
                <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
                <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
                <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
            </div>

            <button onClick={() => resetBoard()} className='px-4 rounded-sm mt-8 py-3 bg-white text-black font-bold'> Reset </button>



        </>
    )
}

function Square({ value, onSquareClick }) {


    return (

        <button onClick={onSquareClick} className={` flex-1/3 font-bold block text-2xl cursor-pointer ${"h-14 w-24"}   text-black bg-white`} >
            {value}
        </button>

    )

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board