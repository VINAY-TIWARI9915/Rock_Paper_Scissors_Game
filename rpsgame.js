let Result = "";
let computerMove = "";
const score = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

displayScore();

function playMove(move) {
  computer();
  if (move === "Scissors") {
    if (computerMove === "Rock") {
      Result = "You Lose";
    } else if (computerMove === "Scissors") {
      Result = "Tie";
    } else {
      Result = "You Win";
    }
  } else if (move === "Rock") {
    computer();

    if (computerMove === "Rock") {
      Result = "Tie";
    } else if (computerMove === "Scissors") {
      Result = "You Win";
    } else {
      Result = "You Lose";
    }
  } else {
    computer();

    if (computerMove === "Rock") {
      Result = "You Win";
    } else if (computerMove === "Scissors") {
      Result = "You Lose";
    } else {
      Result = "Tie";
    }
  }
  if (Result === "You Win") {
    score.Wins += 1;
  } else if (Result === "You Lose") {
    score.Losses += 1;
  } else {
    score.Ties += 1;
  }
  displayScore();
  document.querySelector(".jsresult").innerHTML = `Result : ${Result}`;
  document.querySelector(
    ".jsmove"
  ).innerHTML = `You : <img src="images/${move}-emoji.png" alt="" class="showmove">Computer: <img src="images/${computerMove}-emoji.png" alt="" class="showmove">`;
}

function computer() {
  const num = Math.random();
  if (num >= 0 && num <= 1 / 3) {
    computerMove = "Rock";
  } else if (num > 1 / 3 && num <= 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
}
function displayScore() {
  document.querySelector(".jsscore").innerHTML = `
Score  - Wins : ${score.Wins},    Losses : ${score.Losses},   Ties : ${score.Ties}`;
}
