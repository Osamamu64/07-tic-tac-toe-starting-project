
export default function GameBoard({onSelectSymbol, board}){

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelection(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const upadtedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         upadtedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return upadtedBoard;
    //     });

    //     onSelectSymbol();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSymbol(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    );
}