import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

 class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: false,
      draw: false,
      actualPlayer: null,
    }
  }
  
  handleClick = () => {
    this.props.handleGamePlay(this.props.index)


  // when you click the square it returns an x or an o
handleGamePlay = (index) => {
  const { squares, winner, draw, actualPlayer } =
  this.state
  if(index === 0){
    squares[index] = "❌"
    this.setState({ squares: squares })
  } else if(index !== 0){
    squares[index] = "〇"
    this.setState({ squares: squares })
  } else {
    squares[index] = "🤬"
    this.setState({ squares: squares })
}}
//   (this.state.firstPlayer)
//     this.setState({ squares: "❌" })
//    {
//     this.setState({ squares: "〇" })
//   }
// }
//box 3 x 3
//switching state from 0 to setstate of the emoji
//determine winner


  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
        { this.state.squares.map((value, index) => {
        return (
          <Square
          value= { value }
          key= { index }
          handleGamePlay= { this.handleGamePlay }
        />
      )
    })}
    </div>
    </>
    )
  }
}


export default App
