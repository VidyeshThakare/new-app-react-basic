import React from 'react'
import "./App.css"
import Card from './component/card/Card';
import List from './component/List/List';
import Game from './component/Tictactoe/Tictactoe';



const App = () => {
  
  return (
    <>
    
    <List></List>
    <Card></Card><br></br>
    <div>
      <Game></Game>
    </div>

    
    </>
  )
}

export default App