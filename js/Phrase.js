/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// globals
const phrasesUl = document.getElementById("phrase").querySelector("ul");

class Phrase {
    //Infrastructure

  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
    //addPhraseToDisplay rendering 

  addPhraseToDisplay() {
    phrasesUl.innerHTML = "";
    let letters = this.phrase.split("");
    letters.forEach((letter) => {
      if (letter === " ") {
        phrasesUl.innerHTML += `<li class="space"> </li>`;
      } else {
        phrasesUl.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    });
  }
//  letter selected by the player matches 
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
        this.showMatchedLetter(letter);
        return true;
    } else {
        return false;
    };
  }
// reveals the letter(s) on the board 
  showMatchedLetter(letter) {
    let lettersAtPhrase = phrasesUl.children;
    for (let i=0; i < lettersAtPhrase.length; i++) {
        if (letter === lettersAtPhrase[i].textContent) {
            lettersAtPhrase[i].className = `show letter ${letter}`;
        }
    };
  }
}
