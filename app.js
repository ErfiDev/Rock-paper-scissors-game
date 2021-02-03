const game = ()=>{
    let playerS = 0;
    let computerS = 0;
    const result = document.querySelector('.update-result');

    const startGame = ()=>{
        const gameLobby = document.querySelector('.game-lobby');
        const divMatch = document.querySelector('.Match');
        const btnS = document.querySelector('.btns');

        btnS.addEventListener("click" , ()=>{
            gameLobby.classList.add("opsOff");
            divMatch.classList.remove("opsOff");
        })
    }

    const playMatch = ()=>{
        const btnT = document.querySelectorAll('.button-container button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOption = ["rock" , "paper" , "scissors"];

        const hands = document.querySelectorAll('.img-container img');
        hands.forEach(hand=>{
            hand.addEventListener('animationend' , function(){
                this.style.animation = "";
            })
        })

        btnT.forEach(option=>{
            option.addEventListener('click' , function(){
                const computerRandom = Math.floor(Math.random() *3);
                const computerSelect = computerOption[computerRandom];

                compareHand(this.textContent , computerSelect);

                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerSelect}.png`;
                playerHand.style.animation = "playerH 2s ease";
                computerHand.style.animation = "computerH 2s ease";
            })
        })
    }

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score');
        const computerScore = document.querySelector('.computer-score');
        playerScore.textContent = playerS;
        computerScore.textContent = computerS;
    }

    const compareHand = (playerChoice , computerChoice)=>{
        if(playerChoice === computerChoice){
            result.textContent = "Draw!!";
            return;
        }

        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                result.textContent = "Player Wins";
                playerS++;
                updateScore();
                return;
            }else{
                result.textContent = "Computer Wins";
                computerS++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                result.textContent = "Computer Wins";
                computerS++;
                updateScore();
                return;
            }else{
                result.textContent = "Player Wins";
                playerS++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                result.textContent = "Player Wins";
                playerS++;
                updateScore();
                return;
            }else{
                result.textContent = "Computer Wins";
                computerS++;
                updateScore();
                return;
            }
        }
    }


    playMatch();
    startGame();
}

game();