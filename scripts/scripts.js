// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = false

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const doubleBtn = document.getElementById("doubleBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    doubleBtn.style.display = "none"
}

// Randomly generate player turn
let randomTurn1 = Math.floor(Math.random() * 11) + 1
let randomTurn2 = Math.floor(Math.random() * 11) + 1

if (randomTurn1 > randomTurn2) {
    message.textContent = "Player 1 Turn"
    player1Turn = true
} else {
    player1Turn = false
    message.textContent = "Player 2 Turn"
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")  
}


/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})

// Double or nothing button
doubleBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const doubleNumber = Math.floor(Math.random() * 11) + 1
    
    if (player1Turn) {
        if(doubleNumber >= 5){
            player1Score += randomNumber * 2
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            message.textContent = "Player 2 Turn"    
        } else {
            player1Score += 0
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            message.textContent = "Player 2 Turn" 
        }
        
       
    } else {
        if(doubleNumber >= 5){
            player2Score += randomNumber * 2
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = randomNumber
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            message.textContent = "Player 1 Turn"
            
        } else {
            player2Score += 0
            player2Scoreboard.textContent = player2Score
            player2Dice.textContent = randomNumber
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            message.textContent = "Player 1 Turn"
            
        }
        
        
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleBtn.style.display = "inline"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    randomTurn1 = Math.floor(Math.random() * 11) + 1
    randomTurn2 = Math.floor(Math.random() * 11) + 1
    if (randomTurn1 > randomTurn2) {
    message.textContent = "Player 1 Turn"
    player1Turn = true
    } else {
    player1Turn = false
    message.textContent = "Player 2 Turn"
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")  
    }
}
