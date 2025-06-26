let userName = "Shale";
console.log("Welcome " + userName);

// Get the button element by its id
let button = document.getElementById("welcomeBtn");

// Get the message div where we will show the welcome message
let messageDiv = document.getElementById("message");

// Get the input field where the user types their name
let nameInput = document.getElementById("nameInput");

// Add a click event to the button
button.addEventListener("click", function() {
  // Get the name entered by the user
  let enteredName = nameInput.value;
  document.getElementById("nameInput").value = ""; // Clear the input field after getting the value
  // If the user entered a name, use it. Otherwise, use a default name.
  let displayName = enteredName ? enteredName : "friend";

  // Show a fun personalized message
  messageDiv.textContent = "Welcome, " + displayName + "! 🎉 Glad you're here!";
});