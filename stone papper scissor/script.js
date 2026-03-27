let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#4a719e";
};

const showWinner = (userwin,userChoice,Compchoice) => {
    if(userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you won ! your ${userChoice} beats ${Compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost. ${Compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    //generate comp choice.
    const Compchoice = genCompChoice();
    console.log("comp choice = ",Compchoice);

    if(userChoice === Compchoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock") {
            //scissor,paper
            userwin = Compchoice === "paper" ? false:true;
        }else if (userChoice === "paper") {
      //rock, scissors
      userwin = Compchoice  === "scissors" ? false : true;
    } else {
      //rock, paper
      userwin = Compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, Compchoice);
    }

} ;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});