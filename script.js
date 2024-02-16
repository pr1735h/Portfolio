// Use wavefont to make animation with random style properties and string values:
var element = document.querySelector(".wavefont-test");

// Define a function to randomise the "YELA" value
function randomiseYELA() {
    // Generate a random integer between -100 and 100
    var yela = Math.floor(Math.random() * 201) - 100;
    // Set the new value for the "YELA" axis
    element.style.fontVariationSettings = "\"ROND\" 100, \"YELA\" " + yela;
}

// Call the function once
randomiseYELA();

// Repeat the function every second
setInterval(randomiseYELA, 500);

// A function to shuffle an array using the Fisher-Yates algorithm
function shuffle(array) {
    // Create a copy of the array
    let copy = array.slice();
    let currentIndex = copy.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [copy[currentIndex], copy[randomIndex]] = [copy[randomIndex], copy[currentIndex]];
    }
    // Return the shuffled copy
    return copy;
}

var paragraph = document.getElementById("wavy");
var characterList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

// Shuffle the list and set the paragraph text
paragraph.textContent = shuffle(characterList).join("");

// Shuffle the list every second
setInterval(() => {
    paragraph.textContent = shuffle(characterList).join("");
}, 1000);







// Add Konami code interaction.

