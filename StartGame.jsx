import styles from "./StartGame.module.css"

const StartGame = ({toggle}) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.containerBox}>
                <img src="./images/DiceGame.jpg" alt="" className={styles.diceImage} />
                <div className={styles.gameIntro}>
                    <h1>DICE GAME</h1>
                    <button onClick={toggle} className={styles.playBtn}>Play Now</button>
                </div>
            </div>
        </div>
    )
}

export default StartGame
