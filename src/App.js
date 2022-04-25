import React, { useState } from 'react'

const App = () => {
  
  const [player, setPlayer] = useState('noughts')
  const [board, setBoard] = useState([0,0,0,0,0,0,0,0,0])
  const winningSeq = {
    noughts: '111',
    crosses: '111'
  }

  const playerChoice = (e) => {
    let value = e.target.id
    if (player === 'noughts' && board[value] < 1) {
      board[value] = 1
      document.getElementById(`${value}`).classList.add('naught')
      setPlayer('Crosses')
    } else if (board[value] < 1) {
      board[value] = 2
      document.getElementById(`${value}`).classList.add('cross')    
      setPlayer('noughts')
    }
    checkWin()
  }

  const checkWin = () => {
    let boardString = board.join('')
    if ((boardString.slice(0,3) === winningSeq.noughts) || (boardString.slice(3,6) === winningSeq.noughts) ||
    (boardString.slice(6,9) === winningSeq.noughts) || (boardString[0] + boardString[3] + boardString[6] === winningSeq.noughts) ||
    (boardString[1] + boardString[4] + boardString[7] === winningSeq.noughts) || (boardString[2] + boardString[5] + boardString[8] === winningSeq.noughts) ||
    (boardString[0] + boardString[4] + boardString[8] === winningSeq.noughts) || (boardString[2] + boardString[4] + boardString[6] === winningSeq.noughts)) {
      window.alert('noughts win')
    } else if ((boardString.slice(0,3) === winningSeq.crosses) || (boardString.slice(3,6) === winningSeq.crosses) ||
    (boardString.slice(6,9) === winningSeq.crosses) || (boardString[0] + boardString[3] + boardString[6] === winningSeq.crosses) ||
    (boardString[1] + boardString[4] + boardString[7] === winningSeq.crosses) || (boardString[2] + boardString[5] + boardString[8] === winningSeq.crosses) ||
    (boardString[0] + boardString[4] + boardString[8] === winningSeq.crosses) || (boardString[2] + boardString[4] + boardString[6] === winningSeq.crosses)) {
      window.alert('noughts win')
    } else if (!boardString.includes('0')) {
      window.alert('DRAW')
    }
  }


  return (
    <>
    <div className="game-area">
      <div onClick={playerChoice} id="0" className="game-tile"></div>
      <div onClick={playerChoice} id="1" className="game-tile"></div>
      <div onClick={playerChoice} id="2" className="game-tile"></div>
      <div onClick={playerChoice} id="3" className="game-tile"></div>
      <div onClick={playerChoice} id="4" className="game-tile"></div>
      <div onClick={playerChoice} id="5" className="game-tile"></div>
      <div onClick={playerChoice} id="6" className="game-tile"></div>
      <div onClick={playerChoice} id="7" className="game-tile"></div>
      <div onClick={playerChoice} id="8" className="game-tile"></div>
    </div>
    <p className="game-over">`</p>
    </>
  )
}

export default App;

// 0 1 2
// 3 4 5
// 6 7 8

// WINNING SEQUENCES

// - 012
// - 345
// - 678
// - 036
// - 147
// - 258
// - 210
// - 543
// - 876
// - 852
// - 741
// - 630
// - 048
// - 840
// - 642
// - 246