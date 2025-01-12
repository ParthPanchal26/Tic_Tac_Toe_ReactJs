import React from 'react'
import Square from './Square'

const Board = () => {

    const [state, setState] = React.useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = React.useState(true);
    const [player_1, setPlayer_1] = React.useState("");
    const [player_2, setPlayer_2] = React.useState("");

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
                return state[a]
        }

        return false
    }

    const isWinner = checkWinner()

    const handleClick = (index) => {

        if (state[index] !== null) return

        const copyState = [...state]
        copyState[index] = isXTurn ? 'X' : 'O'
        setState(copyState)
        setIsXTurn(!isXTurn)
    }

    const playAgain = () => {
        setState(Array(9).fill(null))
    }

    return (

        <div className="board-container">
            <div className='heading'><h2>Tic Tac Toe</h2></div>

            {isWinner ?
                <>
                    <div className="board-row-tracker border-bottom">
                        <h3>{isWinner === 'X' ? player_1 : player_2} Won</h3>
                        <button onClick={playAgain}>Play again</button>
                    </div>
                </> :
                <>
                    <div className="board-row-tracker">
                        <input className='player-name' type="text" onChange={(e) => setPlayer_1(e.target.value)} placeholder='Player 1 name: ' value={player_1} />
                        <input className='player-name' type="text" onChange={(e) => setPlayer_2(e.target.value)} placeholder='Player 2 name: ' value={player_2} />
                    </div>
                    <div className='board-row-tracker'>
                        <h3>{isXTurn ? (player_1 + " X") : (player_2 + " O")} Turn</h3>
                        <button onClick={playAgain}>ReStart Game</button>
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} style={{ borderTopLeftRadius: '0.3rem' }} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} style={{ borderTopRightRadius: '0.3rem' }} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} style={{ borderBottomLeftRadius: '0.3rem' }} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} style={{ borderBottomRightRadius: '0.3rem' }} />
                    </div>
                </>
            }
        </div>
    )
}

export default Board