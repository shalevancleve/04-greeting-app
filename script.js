// Get the input field element by its ID
let nameInput = document.getElementById("nameInput");

// Get the button element by its ID
let welcomeButton = document.getElementById("welcomeButton");

// Get the paragraph element by its ID
let welcomeMessage = document.getElementById("welcomeMessage");

// Add a click event listener to the button
welcomeButton.addEventListener("click", function() {
    // Get the value entered by the user
    let userName = nameInput.value;
    // Display a personalized welcome message
    welcomeMessage.textContent = "Welcome, " + userName + "! Have a great day!";
    // Clear the input field
    nameInput.value = "";
});