import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({onSelectSymbol, activePlayerSymbol}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelection(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const upadtedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            upadtedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return upadtedBoard;
        });

        onSelectSymbol();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => handleSelection(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    );
}