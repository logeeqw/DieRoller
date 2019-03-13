/**
 *@author Quinn Logee
 *@version 0.01
 * @summary rolls an input type of dice an input number of time
 * @todo nothing
 */

"use strict";
const PROMPT = require(`readline-sync`);

let rollNumber, dieType;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setDieType();
    setRollNumber();
    roll();
}

main();


/**
 * @method
 * @desc sets the die type
 * @returns {null}
 */
function setDieType() {
    const MAX_SIDES = 1000;
    dieType = Number(PROMPT.question(`How many sides on your die?  `));
    if (dieType > MAX_SIDES){
        alert(`Please choose a di with fewer sides.`)
    }
}

/**
 * @method
 * @desc sets the die type
 * @returns {null}
 */
function setRollNumber() {
    rollNumber = Number(PROMPT.question(`How many times would you like to roll your die?  `))
}

/**
 * @method
 * @desc sets the die type
 * @returns {null}
 */
function roll(){
    let total = 0, number = 0;
    let rolls = [];
    for (let i = 0; i < rollNumber; i++) {
        number = Math.floor((Math.random() * dieType) + 1);
        rolls[i] = number;
        total += number;
        console.log(`roll ${[i]}: ${rolls[i]}`);
        console.log(`total number: ${total}`)
    }
}