import React, {Component} from 'react'

export class Square extends Component{
  render(){
    if(this.props.highlight){
      return(
        <button className="square winners" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      )
    } else{
      return(
        <button className="square" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      )
    }


  }
}
