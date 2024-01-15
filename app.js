// Game Values
let min = 1,
    max = 10,
    winNum = getWinningNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min & max
    minNum.textContent = min;
    maxNum.textContent = max; 

// Play again event listener
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
})

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
       setMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
    }

// Check if won
if(guess === winNum){
    // Game Over - won
    gameOver(true, `${winNum} is correct! you win!!`,'green');
} else {
    // Wrong number
    guessesLeft -= 1;
    
    if(guessesLeft === 0){
        // Game Over - lost
        gameOver(false, `Game Over... ${winNum} is the correct answer`);
    } else {
        // Correction
        if (guessesLeft === 1) {
           setMessage(`${guess} is not corrct, ${guessesLeft} guess left`); 
            guessInput.style.borderColor = 'red'
            guessInput.value = '';
        
        }else{ // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';
    
            // Clear Input
            guessInput.value = '';
    
            // tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses Left`,
             'red');
            }
    }
} 
});

// Game over
function gameOver(won, msg){
let color;
won === true ? color = 'green': color = 'red';

 // Disable Input
 guessInput.disabled = true;  
 // Change border color
 guessInput.style.borderColor = color;
//  Set text color
 message.style.color = color;
 // Set Message
 setMessage(msg);  

// Play Again
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}

// Get Winning Number
function getWinningNum(min, max){
    return (Math.floor(Math.random()*(max) + min));   
}

// Set message
function setMessage(msg, color){ 
    message.style.color = color;
    message.textContent = msg; 
}





