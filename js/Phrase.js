/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phrasesUl = document.getElementById("phrase").querySelector("ul");

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

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

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
        this.showMatchedLetter(letter);
        return true;
    } else {
        return false;
    };
  }

  showMatchedLetter(letter) {
    let lettersAtPhrase = phrasesUl.children;
    for (let i=0; i < lettersAtPhrase.length; i++) {
        if (letter === lettersAtPhrase[i].textContent) {
            lettersAtPhrase[i].className = `show letter ${letter}`;
        }
    };
  }
}
