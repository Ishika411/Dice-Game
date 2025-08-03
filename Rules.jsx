import styles  from "./Rules.module.css"
const Rules = () => {
  return (
    <div className={styles.ruleBox}>
        <h4>Rules to follow:</h4>
        <ul>
          <li>Choose a number between 1 and 6 using the number buttons provided.</li>
          <li>Click on the Dice to roll the dice.</li>
          <li>If the dice shows the same number as the one you selected, your score increases by that number. Else, the score remains unchanged.</li>
          <li>You can click the "Reset" button at any time to reset your score to 0.</li>
          <li>If you roll the dice without selecting a number, no points are awarded.</li>
          <li>Keep playing and accumulating points until you choose to reset or stop.</li>
        </ul>
      </div>
  )
}

export default Rules
