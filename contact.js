// ===============================
// Contact Page JavaScript
// ===============================

// Welcome message
window.onload = function () {
    console.log("Contact page loaded successfully.");
};

// Get the contact form
const contactForm = document.getElementById("contactForm");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate inputs
    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message
    alert(
        "Thank you, " + name + "!\n\n" +
        "Your message has been sent successfully.\n" +
        "We will get back to you as soon as possible."
    );

    // Reset the form
    contactForm.reset();
});

// ===============================
// Future Features
// ===============================
function sendEmail() {
    console.log("Sending email to support...");
}

function saveMessage() {
    console.log("Saving message to database...");
}

