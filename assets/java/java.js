
// Array of all possible letters
var possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// sets "random" to a random choice of all possible letters
var random = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];

// logs the random winning key in the console log for reference
console.log("the winning letter is: " + random)

//object containing win counts
var winCount = {

    wins: 0,
 
    winner: function() {
    this.wins = this.wins + 1;
    console.log("wins: " + this.wins)
    winCount.reset()
    },

    reset:  function() {
        random = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
        console.log("the winning letter is: " + random)
        //guessesLeft.guessReset()
    }

};

//object containing losses count
var lossCount = {

    losses: 0,

    loser: function() {
        
        this.losses = this.losses + 1;
        console.log("losses: " + this.losses)
        
    }

};

var guessesCount = {

    guessesLeft: 10,

    guessed: function() {
        this.guessesLeft = this.guessesLeft - 1;
        console.log("guesses left: " + this.guessesLeft, this)
        
    },

    gameOver: function() {
         if (guessesCount.guessesLeft < 1) {
            winCount.reset()
            lossCount.loser()
            guessesCount.guessesLeft = 10
    }

}
};
//update the wins on the html
function updateWins () {

    var element = document.getElementById('winWord');
    element.textContent = winCount.wins; 

}

function updateLosses () {

    var element = document.getElementById('lossWord');
    element.textContent = lossCount.losses; 
}

function updateGuesses() {

    var element = document.getElementById('guessWord');
    element.textContent = guessesCount.guessesLeft; 
    
}




// will set the key pressed to keyPressed
document.onkeyup = function(event) {
    var keyPressed = event.key;


// if Keypressed is the same as random logs adds one to winCount
if (keyPressed == random) { 
  
    winCount.winner()
    updateWins();
}


else {
    
    
    guessesCount.guessed();
    guessesCount.gameOver();
    updateGuesses();
    updateLosses();
    
}
}








