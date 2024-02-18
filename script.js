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








// Mobile picture troll????