// Select the registration form
const registerForm = document.getElementById("registerForm");

// Listen for form submission
registerForm.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    // Check if all fields are filled
    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === "" ||
        role === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Success message
    alert("Registration successful! Please log in.");

    // Redirect to login page
    window.location.href = "login.html";
});

