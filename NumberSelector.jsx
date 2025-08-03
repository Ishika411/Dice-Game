import { useState } from "react";
import styles from "./NumberSelector.module.css";

const NumberSelector = ({selectedNum, setSelectedNum}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    

    return (
        <div className={styles.numberSelector}>
            <div className={styles.numBox}>
                {arrNumber.map((value, i) => {
                    const isSelected = value === selectedNum;
                    return (
                        <button
                            key={i}
                            className={`${styles.numBoxBtn} ${isSelected ? styles.selectedBtn : ''}`}
                            onClick={() => setSelectedNum(value)}>
                            {value}
                        </button> 
                    );
                })}
            </div>
            <p>Select Number</p>
        </div>
    );
};

export default NumberSelector;
