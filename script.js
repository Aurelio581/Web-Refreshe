
// THEME BUTTON
// Select the theme button from the HTML using its unique ID.
const themeButton = document.getElementById("themeButton");

// Add a click event to the theme button.
// This function runs every time the user clicks the button.
themeButton.addEventListener("click", function() {

    // Add or remove the "dark-mode" class from the body.
    // This changes the website between light mode and dark mode.
    document.body.classList.toggle("dark-mode");

    // Check if the body currently has the "dark-mode" class.
    if (document.body.classList.contains("dark-mode")) {

        // If dark mode is active, change the button text to "Light Mode".
        themeButton.textContent = "Light Mode";

    } else {

        // If dark mode is inactive, change the button text to "Dark Mode".
        themeButton.textContent = "Dark Mode";
    }

});


// CONTACT FORM VALIDATION
// Select the contact form from the HTML using its ID.
const contactForm = document.getElementById("contactForm");

// Add a submit event to the contact form.
// This function runs when the user submits the form.
contactForm.addEventListener("submit", function(event) {

    // Prevent the browser from refreshing the page when the form is submitted.
    event.preventDefault();

    // Get the name entered by the user.
    // value retrieves the text, and trim() removes extra spaces at the beginning and end.
    const name = document.getElementById("name").value.trim();

    // Get the email address entered by the user.
    const email = document.getElementById("email").value.trim();

    // Get the message entered by the user.
    const message = document.getElementById("message").value.trim();

    // Select the HTML element where validation messages will be displayed.
    const formMessage = document.getElementById("formMessage");

    // Check if any of the required fields are empty.
    // The || operator means OR. If at least one field is empty, the condition is true.
    if (name === "" || email === "" || message === "") {

        // Display an error message asking the user to complete all fields.
        formMessage.textContent = "Please complete all fields.";

        // Stop the function so the remaining code does not execute.
        return;
    }

    // Check if the email contains the required basic characters.
    // An email address should contain an @ symbol and a dot.
    if (!email.includes("@") || !email.includes(".")) {

        // Display an error message if the email format is incorrect.
        formMessage.textContent = "Please enter a valid email.";

        // Stop the function if the email is invalid.
        return;
    }

    // Display a success message including the user's name.
    // The + operator joins different pieces of text together.
    formMessage.textContent = "Thank you, " + name + "! Your form is valid.";

    // Clear all form fields after successful validation.
    contactForm.reset();

});
