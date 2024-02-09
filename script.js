// Task 1: Change the color of the greeting text
// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("colorButton").addEventListener("click", function () {
    // TODO: Complete the function to change the 'greeting' element's color to a random color
    const greetingElement = document.getElementById("greeting");

    // Generate a random color using the helper function
    const randomColor = getRandomColor();

    // Change the text color of the 'greeting' element
    greetingElement.style.color = randomColor;
});

// Task 2: Change the text content of the greeting
document.getElementById("textButton").addEventListener("click", function () {
    // TODO: Complete the function to change the text of the 'greeting' element to "Hello, JavaScript!"
    const greetingElement = document.getElementById("greeting");

    // Change the text content of the 'greeting' element
    greetingElement.textContent = "Hello, JavaScript!";
});

// Additional feature: Input field for custom greetings
const customGreetingInput = document.getElementById("customGreetingInput");
customGreetingInput.addEventListener("input", function () {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = customGreetingInput.value;
});

// Additional feature: random greeting generator button
function getRandomGreeting() {
    const greetings = [
        "Hello!",
        "Hi there!",
        "Greetings!",
        "Salutations!",
        "Howdy!",
        "Hey!",
        "What's up?",
        "Good day!",
        "How are you?",
        "How's it going?",
        "Good to see you",
        "Yo!",
    ];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

document
    .getElementById("randomGreetingButton")
    .addEventListener("click", function () {
        const greetingElement = document.getElementById("greeting");
        const randomGreeting = getRandomGreeting();
        greetingElement.textContent = randomGreeting;
    });

// Additional feature: "Reset" button
document.getElementById("resetButton").addEventListener("click", function () {
    const greetingElement = document.getElementById("greeting");
    customGreetingInput.value = "";

    greetingElement.textContent = "Hello world";

    greetingElement.style.color = "";
});

// Additional feature: light/dark theme toggle button
let isDarkTheme = document.body.classList.contains("dark-theme");

document
    .getElementById("toggleThemeButton")
    .addEventListener("click", function () {
        document.body.classList.toggle("dark-theme", !isDarkTheme);

        const buttons = document.querySelectorAll("button");
        buttons.forEach(function (button) {
            button.classList.toggle("dark-theme", !isDarkTheme);
        });

        isDarkTheme = !isDarkTheme;
    });
