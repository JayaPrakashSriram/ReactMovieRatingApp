import "./Day7TTT.css";
import {useState} from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';

export function TicTacToe(){
    const {width, height} = useWindowSize();
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [isXturn, setIsXturn] = useState(true);
    const handClick = (index) => {
      console.log(index);
      if(!winner && board[index] === null){
        const boardCopy = [...board];                   //copy
        boardCopy[index]='X';
        boardCopy[index] = isXturn ? 'X' : 'O';         //set
        setBoard(boardCopy);                            //update
        setIsXturn(!isXturn);                           //toggler
      }
    }
    const decideWinner = (board) => {
        const lines = [
            [0,1,2],
            [3,4,5],                    
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
      for (let i=0; i<lines.length; i++ ){
        const [a,b,c] = lines[i];
        if(board[a] != null && board[a] === board[b] && board[b] === board[c]){
          console.log('Winner', board[a])
          return board[a];
        }
      }
      return null;
    };

    const winner = decideWinner(board);
    const restartGame = () => {
      setBoard([null, null, null, null, null, null, null, null, null]);
      setIsXturn(true);
    };

    return(
        <div className='tictactoe'>
            {winner ? (<Confetti width={width} height={height} gravity={0.05} wind={0}/>):null}
            <h1>
                TicTacToe Game
            </h1>
            <div className="board">
              {board.map((val, index)=> (
                <Gamebox onPlayerClick={() => handClick(index)} val={val}/>
                ))
              }
            </div>
            <Button onClick={restartGame} className="mui-restart-btn" variant="contained">Restart</Button>
            {winner ? <h1> The Winner is:{winner}</h1> : null}
        </div>
    )
}

function Gamebox({onPlayerClick, val}){
    const styles={
        color:val === 'X' ? 'red' : 'green',
    }
    // console.log(val);
    return(
        <div onClick={onPlayerClick} style={styles} className='game-box'>
           {val}
        </div>
    )
}