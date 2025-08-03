import styles from "./GamePlay.module.css";
import NumberSelector from "../NumberSelector/NumberSelector";
import DiceRoller from "../DiceRoller/DiceRoller";
import Rules from "../Rules/Rules";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [currScore, setCurrScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const RollDice = () => {
    const randomNum = generateRandomNumber(1, 7);
    SetCurrentDice((prev) => randomNum);
    if (currentDice === selectedNum) {
      setCurrScore((pre) => pre + selectedNum);
    }
  };
  const scoreResetter = () => {
    setCurrScore((pre) => 0);
  };
  const showingRules = () => {
    setShowRules((pre) => !pre);
  };
  return (
    <div className={styles.mainBox}>
      <div className={styles.headerBox}>
        <div className={styles.scoreBox}>
          <h1 >{currScore}</h1>
          <p>Total Score</p>
        </div>
        <NumberSelector selectedNum={selectedNum}
          setSelectedNum={setSelectedNum} />
      </div>
      <div className={styles.diceContainer}>
        <DiceRoller currentDice={currentDice}
          RollDice={RollDice}
          scoreResetter={scoreResetter}
          showingRules={showingRules} 
          showRules={showRules}/>
      </div>
      {showRules ? <Rules /> : ''}
    </div>
  )
}

export default GamePlay
