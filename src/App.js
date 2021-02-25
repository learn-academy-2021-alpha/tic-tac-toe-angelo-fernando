import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      firstPlayer: null,
      secondPlayer: null,
    }
  }

  //when you click the square it returns an x or an o
handleGamePlay=() => {
  const { squares, firstPlayer, secondPlayer }=
    this.setState({ squares: "❌" })
   {
    this.setState({ squares: "〇" })
  }
}



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
