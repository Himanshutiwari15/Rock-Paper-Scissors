const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const sol = document.querySelector('.sol');

const scoreBoard = {
    player: 0,
    computer: 0
}

// play game
function play(e) {
    // console.log(e.target.id);
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    // console.log(playerChoice,computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    // console.log(playerChoice, computerChoice, winner);
    showWinner(winner, computerChoice);
}

//Get computer Choice
function getComputerChoice() {
    var rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return 'rock';
    } else if (rand == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//get game winner
function getWinner(p, c) {

    if (p === c) {
        return 'draw';
    }
    else if (p === 'rock') {

        if (c === 'paper') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if (p === 'paper') {

        if (c === 'scissors') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if (p === 'scissors') {

        if (c === 'rock') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        //inc player socre
        scoreBoard.player++;
        //show result from sol board
        result.innerHTML = "<h1 class='text-win' > You Win</h1> <i class='fas fa-hand-" + computerChoice + " fa-10x'></i><p> Computer Chose <strong>" + computerChoice + '</strong></p>';
    } else if (winner === 'computer') {
        //inc computer socre
        scoreBoard.computer++;
        //show result from sol board
        result.innerHTML = "<h1 class='text-lose'> You loose</h1> <i class='fas fa-hand-" + computerChoice + " fa-10x'></i><p> Computer Chose <strong>" + computerChoice + '</strong></p>';
    } else {
        result.innerHTML = "<h1> It's a draw</h1> <i class='fas fa-hand-" + computerChoice + " fa-10x'></i><p> Computer Chose <strong>" + computerChoice + '</strong></p>';
    }
    //show score
    score.innerHTML = "<p>Player: " + scoreBoard.player + "</p><p>Computer: " + scoreBoard.computer + "</p>";

    sol.style.display = "block";
}


//restart game

function restartGame() {
    scoreBoard.computer = 0;
    scoreBoard.player = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

//clear modal

function clearModal(e) {
    if (e.target == sol) {
        sol.style.display = "none";
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);