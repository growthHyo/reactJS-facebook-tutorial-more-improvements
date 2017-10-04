import React, {Component} from 'react'
import {Board} from '../components/board'
import calculateWinner from '../helpers'

class Game extends Component{
  constructor(props){
    super(props)
  }

  state = {
    history: [{
      squares: Array(9).fill(null),
      playKey: null
    }],
    stepNumber: 0,
    xIsNext: true,
    upward: true
  }

  handleClick(i, y){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if(calculateWinner(squares) || squares[i]){
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(
        [{
          squares: squares,
          playKey: y
        }]
      ),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(play){
    this.setState({
      stepNumber: play,
      xIsNext: (play % 2) === 0
    });
  }

  toggleOrder() {
    const upward = this.state.upward;
    this.setState({
      upward: !upward,
    });
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const upward = this.state.upward

    const moves = history.map((play, keyMove) => {
      const desc = keyMove ? 'Go to move (' + play.playKey + ')': 'Go !!!';
      if(current === play){
        return(
            <li key={keyMove}>
              <button onClick={() => this.jumpTo(keyMove)} >
              <b>{desc}</b>
              </button>
            </li>
        )
      }
      return(
          <li key={keyMove}>
            <button onClick={() => this.jumpTo(keyMove)} >
              {desc}
            </button>
          </li>
      )

    })

    let status;
    let winningPos;
    if(winner){
      status = "Winner: " + winner.winner;
      winningPos = winner.winningPos;
    }else{
      status = "Next Player: " + (this.state.xIsNext ? 'X':'O');
    }

    return(
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i, y) => this.handleClick(i, y)} winningPos={winningPos}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.toggleOrder()}> Order </button>
          {this.state.upward?<ol>{moves}</ol>:<ol>{moves.reverse()}</ol>}

        </div>
      </div>
    )
  }
}

export default Game;
