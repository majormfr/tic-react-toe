import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Square({value,onTurn}){

  return(
    <button  className="square" onClick={onTurn}>{value}</button>
  );
}
function Board() {
  const [squares,setSquares] = useState(Array(9).fill(null))
const [xIsNext,setNext] = useState(true);
  const onTurn = (i)=>{
    
    
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i]= 'x';
    }else{
      nextSquares[i]= 'o';
    }
    setSquares(nextSquares);
    setNext(!xIsNext);
   


  }
  let status;
  const winner = calculateWinner(squares);
  if(winner){
  status = `Winner is ${winner}`;
  }else{
    status = `TURN FOR ${xIsNext ? 'x':'o'}`;
  }
  
  return (
    <>
 <p>{status}</p>
  <div className="board-row"> 
  <Square   onTurn={()=>onTurn(0)} value={squares[0]} />
  <Square   onTurn={()=>onTurn(1)} value={squares[1]} />
  <Square   onTurn={()=>onTurn(2)} value={squares[2]} />
  </div>
  <div className="board-row"> 
  <Square   onTurn={()=>onTurn(3)} value={squares[3]} />
  <Square   onTurn={()=>onTurn(4)} value={squares[4]} />
  <Square   onTurn={()=>onTurn(5)} value={squares[5]} />
  </div>
  <div className="board-row"> 
  <Square   onTurn={()=>onTurn(6)} value={squares[6]} />
  <Square   onTurn={()=>onTurn(7)} value={squares[7]} />
  <Square   onTurn={()=>onTurn(8)} value={squares[8]} />
  </div>

  </>
  );
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;

}


export default Board
