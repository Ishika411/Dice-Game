import styles from "./DiceRoller.module.css"
import { useState } from "react"
const DiceRoller = ({ currentDice, RollDice, scoreResetter, showingRules,showRules }) => {


    return (
        <div>
            <div className={styles.diceBox}>
                <img onClick={RollDice} src={`./images/d${currentDice}.jpg`} alt="" />
                <p>Click on Dice to roll</p>
                <button className={styles.resetBtn} onClick={scoreResetter}>Reset Score</button>
                <button className={styles.rulesBtn} onClick={showingRules}>{showRules?'Hide':'Show'} Rules</button>
            </div>
        </div>
    )
}

export default DiceRoller
