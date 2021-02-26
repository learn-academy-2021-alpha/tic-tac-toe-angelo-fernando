import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';


 function App(){
   return(
    <div>
    <header className= "App-Header"> Tic Tac Toe</header>
    <body>
    <Game />
    <div className= "Footer"><p>click squares to play game</p></div>
    </body>
    </div>
   );
 }
export default App
