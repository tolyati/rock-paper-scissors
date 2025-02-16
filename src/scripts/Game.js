const button_Rock_Choice = document.getElementById('Rock');
const button_Paper_Choice = document.getElementById('Paper');
const button_Scissors_Choice = document.getElementById('Scissors');
let user_Choice;

button_Rock_Choice.addEventListener('click', () => {
  user_Choice = "Rock";
  playGame();
});


button_Paper_Choice.addEventListener('click', () => {
  user_Choice = "Paper";
  playGame();
});


button_Scissors_Choice.addEventListener('click', () => {
  user_Choice = "Scissors";
  playGame();
});

function playGame() {
    console.log(user_Choice);  
    const choices = ["Rock", "Paper", "Scissors"];  
    const bot_Choice = choices[Math.floor(Math.random() * choices.length)];
    
    // User chose Rock

    if(user_Choice == "Rock" && bot_Choice == "Rock"){
        window.location.href = "./Tie.html";
    } else if (user_Choice == "Rock" && bot_Choice == "Paper") {
        window.location.href = "./You Lost.html";
    } else if (user_Choice == "Rock" && bot_Choice == "Scissors") {
        window.location.href = "./You won.html";
    }

    // User chose Paper


    if(user_Choice == "Paper" && bot_Choice == "Paper"){
        window.location.href = "./Tie.html";
    } else if (user_Choice == "Paper" && bot_Choice == "Scissors") {
        window.location.href = "./You Lost.html";
    } else if (user_Choice == "Paper" && bot_Choice == "Rock") {
        window.location.href = "./You won.html";
    }

    // User chose Scissors

    if(user_Choice == "Scissors" && bot_Choice == "Scissors"){
        window.location.href = "./Tie.html";
    } else if (user_Choice == "Scissors" && bot_Choice == "Rock") {
        window.location.href = "./You Lost.html";
    } else if (user_Choice == "Scissors" && bot_Choice == "Paper"){
        window.location.href = "./You won.html";
    }
}