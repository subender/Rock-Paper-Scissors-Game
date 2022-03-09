//Elements
const buttonsContainerEl = document.querySelector(".buttons__container");
const messageEl = document.querySelector(".message");
const userScoreEl = document.querySelector(".user__score");
const computerScoreEl = document.querySelector(".computer__score");

// Variables
const options = ["stone", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
//EventListner
buttonsContainerEl.addEventListener("click", clickHandler);

//funcitons
function clickHandler(e) {
  const myResponse = e.target.value;
  const computerResponse = options[Math.floor(Math.random() * options.length)];
  getResult(myResponse, computerResponse);
}

function getResult(user, computer) {
  if (userScore <= 10 && computerScore <= 10) {
    switch (user + computer) {
      case "paperstone":
      case "scissorspaper":
      case "stonescissors":
        userScore++;
        displayMessage(user, computer, "Won!!");
        userScoreEl.innerText = String(userScore).padStart(2, 0);
        break;

      case "stonepaper":
      case "paperscissors":
      case "scissorsstone":
        computerScore++;
        displayMessage(user, computer, "Lost!!");
        computerScoreEl.innerText = String(computerScore).padStart(2, 0);
        break;

      case "stonestone":
      case "paperpaper":
      case "scissorsscissors":
        displayMessage(user, computer, "It's a Draw!!");
        break;
    }
  }

  if (userScore === 10 || computerScore === 10) {
    alert(
      `Game Over!! ${userScore > computerScore ? "You Won !!" : "You Lost!!"}`
    );

    confirm("Play Again ? ");

    if (confirm) {
      location.reload();
    }
  }
}

function displayMessage(user, computer, result) {
  const message = ` Your Choice ${user} & Computer's Choice ${computer} You ${result}`;
  messageEl.innerText = message;
}
