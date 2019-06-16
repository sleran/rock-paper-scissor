let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.querySelector('#r');
const paperDiv = document.querySelector('#p');
const scissorsDiv = document.querySelector('#s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Sten";
    if (letter === "p") return "Papir";
    return "Saks";
}

function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "DIG".fontsize(3).sup();
    const smallCompWord = "COMP".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(user);
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} SLÅR ${convertToWord(computer)}${smallCompWord} . DIN SEJR`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => { userChoiceDiv.classList.remove('green-glow'); }, 600);
}
function lose(user, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "DIG".fontsize(3).sup();
    const smallCompWord = "COMP".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(user);
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} TABER TIL ${convertToWord(computer)}${smallCompWord} . DU TABTE`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => { userChoiceDiv.classList.remove('red-glow'); }, 600);
}
function draw(user, computer) {
    const smallUserWord = "DIG".fontsize(3).sup();
    const smallCompWord = "COMP".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(user);
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} = ${convertToWord(computer)}${smallCompWord} . UAFGJORT`;
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => { userChoiceDiv.classList.remove('gray-glow'); }, 600);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () => {
        game('r');
    });

    paperDiv.addEventListener('click', () => {
        game('p');
    });

    scissorsDiv.addEventListener('click', () => {
        game('s');
    });
}

main();