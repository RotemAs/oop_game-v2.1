/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// globals
const startScreen = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries");
const messageBoard = document.querySelector(".board-header")


class Game{
    //Infrastructure
    constructor() {
        this.missed =0 
        this.phrases = [
            new Phrase ("Speak of the devil"),
            new Phrase ("See eye to eye"),
            new Phrase ("Once in a blue moon"),
            new Phrase ("A piece of cake"),
            new Phrase ("kill two birds with one stone")
        ];
        this.activePhrase = null
    }

 // get start game 
    getRandomPhrase() {
        let phraseNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseNum].phrase;
    };

    startGame() {
        
        phrasesUl.innerHTML = "";
        for (let i=0; i < keys.length; i++) {
            keys[i].className = "key";
            keys[i].disabled = false;
        };
        for (let i=0; i < hearts.length; i++) {
            hearts[i].firstChild.src = "images/liveHeart.png";
            hearts[i].classList.add('on')
            
        }
        this.missed = 0;
        startScreen.style.display = "none";
        let currentPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = currentPhrase;   
        currentPhrase.addPhraseToDisplay();    
        console.log('this.activePhrase',this.activePhrase)

    };
// handleInteraction --  game logic
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.phrase.includes(button.innerHTML)) {
            button.className += " chosen";
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver(true);
            };
        } else {
            button.className += " wrong";
            this.removeLife();
        };
    };

    // the uniqueRemainingLetters is part of exceeds grade "Making the project your own" (i have create 'uniqueRemainingLetters' So that I may know Some unique letters remain \The amount of guesswork left   )

    checkForWin() {
        let remainingLetters = 0
        let uniqueRemainingLetters = []
        for (let i=0; i < phrasesUl.children.length; i++) {
            if (phrasesUl.children[i].className.includes("hide")) {
                let newLetter = phrasesUl.children[i].innerHTML 
                uniqueRemainingLetters.indexOf(newLetter) === -1 ? uniqueRemainingLetters.push(newLetter) : console.log("This item already exists");
                remainingLetters++;
            };
        };
               
        if (remainingLetters === 0) {
            return true;
        }else if(uniqueRemainingLetters.length <= 3){
            messageBoard.innerHTML = 'Youre almost there'
            messageBoard.classList.add('message-on')
            

        }
    };
// the on and  off class is to make the Button-style squares over the hearts of the experimenters (outset\inset style). 
    removeLife() {
        this.missed += 1;
        let heartIndex = hearts.length - this.missed;
        if (this.missed < 5) {
            hearts[heartIndex].firstChild.src = "images/lostHeart.png"
            hearts[heartIndex].classList.remove('on')
            hearts[heartIndex].classList.add('off')
            
        } else {
            this.gameOver(false);
        };
    }

    gameOver(gameWon) {
        let message = document.getElementById("game-over-message");
        if (gameWon) {
           startScreen.style.display = "initial";
           startScreen.className = "win";
           message.innerHTML = `You win! with <em>"${this.activePhrase.phrase}"</em> Phrase` 
        } else {
            startScreen.style.display = "initial";
            startScreen.className = "lose";
            message.innerHTML = `You lose! The phrase was <em>"${this.activePhrase.phrase}"</em>` 
        }; 
   };

    
}