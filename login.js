// Select the login form
const loginForm = document.getElementById("loginForm");

// Listen for form submission
loginForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get form values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Simple validation
    if (email === "" || password === "" || role === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Success message
    alert("Login successful! Welcome " + email);

    // Redirect user based on selected role
    if (role === "customer") {
        window.location.href = "customer.html";
    } else if (role === "driver") {
        window.location.href = "driver.html";
    } else if (role === "admin") {
        window.location.href = "admin.html";
    }
});

