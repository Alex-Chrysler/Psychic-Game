
// Array of all possible letters
var possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// sets "random" to a random choice of all possible letters
var random = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];

// logs the random winning key in the console log for reference
console.log("the winnong letter is: " + random)

//object containing wins
var winCount = {

    wins: 0,
 
    winner: function() {
    this.wins = this.wins + 1;
    console.log("wins: " + this.wins)
}
};

//object containing losses
var lossCount = {

    losses: 0,

    loser: function() {
        this.losses = this.losses + 1;
        console.log("losses: " + this.losses)
    }
}

// will set the key pressed to keyPressed
document.onkeyup = function(event) {
    var keyPressed = event.key;


// if Keypressed is the same as random logs adds one to winCount
if (keyPressed == random) { 
    winCount.winner()
}

else {
    lossCount.loser()
}
}
