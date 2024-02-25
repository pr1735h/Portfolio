// Konami code:
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiIndex = 0;

document.addEventListener('keydown', function (e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiIndex = 0;
            applyTransform();
            setTimeout(function () {
                alert("Please refresh the page to reset.");
            }, 1000);  // Delay the alert by 1 second
        }
    } else {
        konamiIndex = 0;
    }
});

function applyTransform() {
    var elements = document.querySelectorAll('body *');
    elements.forEach(function (element) {
        var text = element.innerText;
        if (text) {  // Check if the element contains text
            element.innerHTML = '';
            for (let i = 0; i < text.length; i++) {
                let span = document.createElement('span');
                span.innerText = text[i];
                span.style.position = 'relative';
                span.style.top = (Math.random() * 50 - 25) + 'px';
                element.appendChild(span);
            }
        }
    });
}

// Get the elements that use the wavefont-test class
const h2 = document.querySelector(".wavefont-test");
const p = document.getElementById("randWavy").querySelector(".wavefont-test");

// Define a function that changes the YELA value randomly
function changeYELA() {
    // Generate a random number between -100 and 100
    const randomYELA = Math.floor(Math.random() * 201) - 100;
    // Update the font-variation-settings property with the new YELA value
    h2.style.fontVariationSettings = `"ROND" 100, "YELA" ${randomYELA}`;
    p.style.fontVariationSettings = `"ROND" 100, "YELA" ${randomYELA}`;
}

// Set a timer that runs the function every 500 milliseconds
setInterval(changeYELA, 500);

// Define a function that generates a random string of a given length
function generateRandomString(length) {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Define a function that updates the text content of the paragraph with a random string
function updateParagraph() {
    // Generate a random string of the same length as the original text
    let randomString = generateRandomString(p.textContent.length);
    // Update the innerHTML of the paragraph with the random string
    p.innerHTML = `<span class="pumpkinLine wavefont-test">${randomString}</span>`;
}

// Set a timer that runs the function every 500 milliseconds
setInterval(updateParagraph, 500);


// Hover tiles:
const numRows = 10;
const numCols = 10;
const gridContainer = document.getElementById("grid-container");

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const tile = document.createElement("div");
        tile.classList.add("col-sm-1", "square-tile", "tile"); // Add 'tile' class
        gridContainer.appendChild(tile);

        // Add event listener for mouseenter
        tile.addEventListener("mouseenter", () => {
            // Get surrounding tiles
            const surroundingTiles = getSurroundingTiles(tile);
            surroundingTiles.forEach(surroundingTile => {
                surroundingTile.classList.add("surrounding-tile");
            });
        });

        // Add event listener for mouseleave
        tile.addEventListener("mouseleave", () => {
            // Remove surrounding-tile class from all tiles
            const allTiles = document.querySelectorAll(".tile");
            allTiles.forEach(t => t.classList.remove("surrounding-tile"));
        });
    }
}

// Function to get surrounding tiles
function getSurroundingTiles(tile) {
    // Implement logic to find surrounding tiles (top, bottom, left, right)
    // For simplicity, let's assume a 10x10 grid with no edge cases
    const index = Array.from(gridContainer.children).indexOf(tile);
    const topTile = gridContainer.children[index - numCols];
    const bottomTile = gridContainer.children[index + numCols];
    const leftTile = gridContainer.children[index - 1];
    const rightTile = gridContainer.children[index + 1];
    return [topTile, bottomTile, leftTile, rightTile].filter(Boolean);
}