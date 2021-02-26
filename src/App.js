import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';


 function App(){
   return(
    <div>   
    <header className= "App-Header"> Tic Tac Toe</header>
    <Game />
    </div>
   );
 }
export default App
 // <div className="App">
 //   <header className="App-Header">
 //  <img src={
 //    logo className= "App-logo" alt="logo" />
 //  <p>Edit <code>src/App.js</code and save to refresh<p>
 //  <a className="App-Link"
 //      href="https://reactjs.org"
 //      target="_blank"
 //      rel="noopener noreferrer"
 //  >
 //    This is a place holder
 //    </a>
 //   </header>
 // </div>





  // constructor(props){
  //   super(props)
  //   this.state = {
//       squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       winner: false,
//       draw: false,
//       actualPlayer: null,
//     }
//   }

//   handleClick = () => {
//     this.props.handleGamePlay(this.props.index)


//   // when you click the square it returns an x or an o
// handleGamePlay = (index) => {
//   const { squares, winner, draw, actualPlayer } =
//   this.state
//   if(index === 0){
//     squares[index] = "❌"
//     this.setState({ squares: squares })
//   } else if(index !== 0){
//     squares[index] = "〇"
//     this.setState({ squares: squares })
//   } else {
//     squares[index] = "🤬"
//     this.setState({ squares: squares })
// }}
//   (this.state.firstPlayer)
//     this.setState({ squares: "❌" })
//    {
//     this.setState({ squares: "〇" })
//   }
// }
//box 3 x 3
//switching state from 0 to setstate of the emoji
//determine winner


//   render(){
//     return(
//       <>
//         <h1>Tic Tac Toe</h1>
//         <div className="gameboard">
//         { this.state.squares.map((value, index) => {
//         return (
//           <Square
//           value= { value }
//           key= { index }
//           handleGamePlay= { this.handleGamePlay }
//         />
//       )
//     })}
//     </div>
//     </>
//     )
//   }
// }


// export default App
