import './App.css'
import StartGame from './components/StartGame/StartGame'
import GamePlay from './components/GamePlay/GamePlay';
import { useState } from 'react';

function App() {

  const[isStarted,setIsStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsStarted((prev)=>!prev);
  };
  return (
    
    <div>
      {isStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </div>
  );
}

export default App


