// Konami code:
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var konamiIndex = 0;

document.addEventListener("keydown", function (e) {
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
    var elements = document.querySelectorAll("body *");
    elements.forEach(function (element) {
        var text = element.innerText;
        if (text) {  // Check if the element contains text
            element.innerHTML = '';
            for (let i = 0; i < text.length; i++) {
                let span = document.createElement("span");
                span.innerText = text[i];
                span.style.position = "relative";
                span.style.top = (Math.random() * 50 - 25) + "px";
                element.appendChild(span);
            }
        }
    });
}

//Change background colour
function changeBackgroundGradient() {
    // Generate two random RGB colors
    const color1 = getRandomRGBColor();
    const color2 = getRandomRGBColor();

    // Set the radial gradient background
    document.body.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
}

function getRandomRGBColor() {
    // Generate random RGB values (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const backButton = document.getElementById("backgroundChange");
backButton.addEventListener("click", changeBackgroundGradient);