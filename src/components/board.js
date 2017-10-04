import React, {Component} from 'react'
import {Square} from './square'
export class Board extends Component {

  renderSquare(i, y) {
    let won = false;
    if (this.props.winningPos && this.props.winningPos.indexOf(i) >= 0) {
      won = true;
    }
    return (<Square key={y} value={this.props.squares[i]} highlight={won} onClick={() => this.props.onClick(i, y)}/>)
  }

  render() {
    let boardRows = [];
    let squaresRender = [];
    let squareNumber = 0;
    let i;
    let j;
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        let code = ("\'" + i + "," + (j + 1) + "\'")
        squaresRender.push(this.renderSquare(squareNumber, code))
        squareNumber++
      }
      boardRows.push(
        <div key={i} className="board-row">{squaresRender}</div>
      )
      squaresRender = [];
    }
    return (
      <div>
        {boardRows}
      </div>
    )
  }
}
