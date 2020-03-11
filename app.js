/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//document.querySelector("#current-" + activePlayer).textContent = dice;

/* lecture-48 <em> is an html element. written in "". else it is taken as js code
 with innerHTML we hav used <em> to emphasize the dice value.*/
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-1").textContent = "0";
//----------- lecture 49 --------------->>>>
// event listener on Roll button
document.querySelector(".btn-roll").addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = `dice-${dice}.png`; //to select dice image on the basis of random number. see index file <img src=''>

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).innerHTML =
      "<em>" + roundScore + "</em>";
    /* +activePlayer is used to select player 1 or player 2 and add score to the active player only.
 textContent this will only set the plain text to html element.
 if you also want to some html to set on the selected element use (innerHTML).*/
  } else {
    changePlayersTurn();
  }
});

// lecture 51
// event listener on Hold button
document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] += roundScore;
  document.querySelector(`#score-${activePlayer}`).textContent =
    scores[activePlayer]; //settings global score
  if (scores[activePlayer] >= 10) {
    document.querySelector(`#name-${activePlayer}`).textContent = "WINNER!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    changePlayersTurn();
  }
});

function changePlayersTurn() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // document.querySelector(".player-0-panel").classList.remove("active")
  // document.querySelector(".player-1-panel").classList.add("active");
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
