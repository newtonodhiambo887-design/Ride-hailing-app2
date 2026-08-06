// ================================
// Customer Dashboard JavaScript
// ================================

// Display a welcome message
window.onload = function () {
    alert("Welcome to your Customer Dashboard!");
};

// Highlight ride status
const statusCells = document.querySelectorAll("tbody td:last-child");

statusCells.forEach(function (cell) {
    const status = cell.textContent.trim().toLowerCase();

    if (status === "completed") {
        cell.style.color = "green";
        cell.style.fontWeight = "bold";
    } else if (status === "cancelled") {
        cell.style.color = "red";
        cell.style.fontWeight = "bold";
    } else if (status === "pending") {
        cell.style.color = "orange";
        cell.style.fontWeight = "bold";
    }
});

// Book Ride button
const bookRideButton = document.querySelector("button");

if (bookRideButton) {
    bookRideButton.addEventListener("click", function () {
        alert("Redirecting to the Ride Booking page...");
        window.location.href = "book-ride.html";
    });
}

// Display current date and time in the console
const currentDate = new Date();
console.log("Dashboard opened on: " + currentDate.toLocaleString());

// Future feature placeholders
function refreshRideHistory() {
    console.log("Refreshing ride history...");
}

function updateProfile() {
    console.log("Opening profile editor...");
}

