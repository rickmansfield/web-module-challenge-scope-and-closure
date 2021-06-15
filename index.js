// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter(){
   return count ++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️*/

function inning(){
  return Math.floor((Math.random() * 2) + 1);
}
console.log(`task 2:`, inning());

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️*/ 

function finalScore(inningcb, numbOfInnings){
  const totalScore = {
    Home: 0,
    Away: 0
    };
  for (let i = 0; i < numbOfInnings; i++){
    totalScore.Home += inningcb();
    totalScore.Away += inningcb();
  }
  return totalScore;
}
console.log('task 3', finalScore(inning, 9));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️ */

  function getInningScore(inningcb) {
    const inningScore = {
      Home: 0, 
      Away: 0
    };
    inningScore.Home = inningcb();
    inningScore.Away = inningcb();
    return inningScore;
    // return {"Home": inningcb(), "Away": inningcb()};
  }
  console.log('Task 4', getInningScore(inning));


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScorecb, inningcb, numbOfInnings) {
  let arrayOfScores = [];
  for (let i = 0; i <= numbOfInnings; i++){
    arrayOfScores.push(`Inning ${[i]}: Away ${inningcb()} - Home ${inningcb()}`);

  } 
  // if (getInningScore.Away === getInningScore.Home){
  //   arrayOfScores.push(`This game will require extra innings Away: ${getInningScorecb().Away} - Home ${getInningScorecb().Home}`);
  // } else {
  //   arrayOfScores.push(`Final score: Away: ${getInningScorecb().Away} - Home ${getInningScorecb().Home}`);
  // }

  return arrayOfScores;
}
console.log('task 5', scoreboard(getInningScore, inning, 9));




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  //console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
