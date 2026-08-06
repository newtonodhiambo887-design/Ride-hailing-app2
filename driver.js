// ===============================
// Driver Dashboard JavaScript
// ===============================

// Welcome message
window.onload = function () {
    alert("Welcome to the Driver Dashboard!");
};

// ===============================
// Toggle Driver Status
// ===============================
const statusText = document.getElementById("driverStatus");
const statusButton = document.getElementById("toggleStatusBtn");

statusButton.addEventListener("click", function () {

    if (statusText.textContent === "Available") {
        statusText.textContent = "Offline";
        statusText.style.color = "red";
        statusButton.textContent = "Go Online";

        alert("You are now Offline.");
    } else {
        statusText.textContent = "Available";
        statusText.style.color = "green";
        statusButton.textContent = "Go Offline";

        alert("You are now Available.");
    }

});

// ===============================
// Accept Ride Request
// ===============================
const acceptButtons = document.querySelectorAll(".accept-btn");

acceptButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Ride request accepted!");

        const row = button.parentElement.parentElement;
        row.style.backgroundColor = "#d4edda";

        button.disabled = true;
        button.textContent = "Accepted";

    });

});

// ===============================
// Reject Ride Request
// ===============================
const rejectButtons = document.querySelectorAll(".reject-btn");

rejectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Ride request rejected.");

        const row = button.parentElement.parentElement;
        row.style.backgroundColor = "#f8d7da";

        button.disabled = true;
        button.textContent = "Rejected";

    });

});

// ===============================
// Display Current Date and Time
// ===============================
const today = new Date();

console.log("Driver Dashboard opened on:");
console.log(today.toLocaleString());

// ===============================
// Future Features
// ===============================
function startTrip() {
    console.log("Trip started...");
}

function endTrip() {
    console.log("Trip completed...");
}

function updateDriverLocation() {
    console.log("Updating driver's live location...");
}

