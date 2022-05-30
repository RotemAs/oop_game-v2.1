/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const startScreen = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries");


class Game{
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
        }
        this.missed = 0;
        startScreen.style.display = "none";
        let currentPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = currentPhrase;   
        currentPhrase.addPhraseToDisplay();    
        console.log('this.activePhrase',this.activePhrase)

    };

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
    checkForWin() {
        let remainingLetters = 0
        for (let i=0; i < phrasesUl.children.length; i++) {
            if (phrasesUl.children[i].className.includes("hide")) {
                remainingLetters++;
            };
        };
        if (remainingLetters === 0) {
            return true;
        };
    };

    removeLife() {
        this.missed += 1;
        let heartIndex = hearts.length - this.missed;
        if (this.missed < 5) {
            hearts[heartIndex].firstChild.src = "images/lostHeart.png"
        } else {
            this.gameOver(false);
        };
    }

    gameOver(gameWon) {
        let message = document.getElementById("game-over-message");
        if (gameWon) {
           startScreen.style.display = "initial";
           startScreen.className = "win";
           message.innerHTML = "You win!"
        } else {
            startScreen.style.display = "initial";
            startScreen.className = "lose";
            message.innerHTML = `You lose! The phrase was <em>"${this.activePhrase.phrase}"</em>` 
        }; 
   };

    
}