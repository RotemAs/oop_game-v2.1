/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// globals
let game = "";
const userStartButton = document.getElementById("btn__reset");
const projectedKeyboard = document.getElementById("qwerty");
const keys = document.querySelectorAll(".key");

// step 4  event listener to the "Start Game" button 
userStartButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

// step 4 event listeners to each of the onscreen keyboard buttons

projectedKeyboard.onclick = (e) => {
    let target = e.target;
    if (target.className === "key") {
        game.handleInteraction(target);
    };
};

//event listeners to each of the physical computer keyboard key 

document.addEventListener("keyup", (e) => {
    for (let i=0; i < keys.length; i++) {
        if (e.key === keys[i].innerHTML && keys[i].disabled === false) {
            game.handleInteraction(keys[i]);
        }
    }
}); 

