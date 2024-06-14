let choice = document.querySelectorAll(".choice");
let message = document.querySelector(".message-container");

const computerChoice = () => {
  let option = ["rock", "papper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return option[index];
};

const gameLogic = (compchoice, userchoice) => {
  if (compchoice === userchoice) {
    message.innerHTML = "Game Draw";
  } else if (userchoice === "rock") {
    compchoice == "papper"
      ? (message.innerHTML = "computer winner")
      : (message.innerHTML = "you winner");
  } else if (userchoice === "papper") {
    compchoice == "scissor"
      ? (message.innerHTML = "computer winner")
      : (message.innerHTML = "you winner");
  } else {
    compchoice == "papper"
      ? (message.innerHTML = "computer winner")
      : (message.innerHTML = "you winner");
  }
};

choice.forEach((cho) => {
  cho.addEventListener("click", () => {
    let userchoice = cho.getAttribute("id");
    let compchoice = computerChoice();
    console.log("computer choice :" + compchoice);
    console.log("User choice :" + userchoice);
    gameLogic(compchoice, userchoice);
  });
});
