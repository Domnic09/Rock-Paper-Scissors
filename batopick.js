function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) 
    {
        result += "This is user's picked: " + playerSelection + "<br>";
        result += "This is from computer's picked: " + computerSelection + "<br>";
        result += "The user wins.";
    } else {
        result += "This is user's picked: " + playerSelection + "<br>";
        result += "This is from computer's picked: " + computerSelection + "<br>";
        result += "The computer wins.";
    }

    document.getElementById("result").innerHTML = result;
}

function getComputerChoice(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function submitAnswer() {
    const playerSelection = document.getElementById("playerSelection").value.toLowerCase();
    const options = ["rock", "paper", "scissor"];
    const computerSelection = getComputerChoice(options);

    playRound(playerSelection, computerSelection);
}
