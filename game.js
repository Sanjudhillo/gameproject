let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComputerChoice = () => {
const options =["rock","paper","scissor"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}
const gameDraw= ()=>{
    console.log("game was draw");
    msg.innerText= "Game is draw!!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You win !! your  ${userChoice} beats ${CompChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You lose!! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
console.log("user choice is",userChoice)
const CompChoice = genComputerChoice();
console.log("computer choice is ",CompChoice);
if(userChoice === CompChoice){
    gameDraw();
}
else{
    let userWin = true;
    if(userChoice=="rock"){
        userWIn = CompChoice ==="paper"? false:true;
    }else if(userChoice=="paper"){
        userWin = CompChoice ==="scissor"?false:true;
    }else {
        userWin = CompChoice === "rock"?false:true;
    }
    showWinner(userWin,userChoice,CompChoice);
}

}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
});
});