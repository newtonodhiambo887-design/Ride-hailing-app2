// ===============================
// Admin Dashboard JavaScript
// ===============================

// Welcome message
window.onload = function () {
    alert("Welcome to the Administrator Dashboard!");
};

// ===============================
// Approve Driver
// ===============================
const approveButtons = document.querySelectorAll(".approve-btn");

approveButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const row = button.parentElement.parentElement;
        const statusCell = row.children[2];

        statusCell.textContent = "Approved";
        statusCell.style.color = "green";
        statusCell.style.fontWeight = "bold";

        alert("Driver approved successfully.");

        button.disabled = true;
        button.textContent = "Approved";
    });
});

// ===============================
// Remove Driver or Customer
// ===============================
const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const confirmDelete = confirm(
            "Are you sure you want to remove this record?"
        );

        if (confirmDelete) {
            const row = button.parentElement.parentElement;
            row.remove();

            alert("Record removed successfully.");
        }
    });
});

// ===============================
// Display Dashboard Information
// ===============================
console.log("Administrator Dashboard Loaded");
console.log("Date: " + new Date().toLocaleString());

// ===============================
// Future Functions
// ===============================
function addDriver() {
    console.log("Adding a new driver...");
}

function addCustomer() {
    console.log("Adding a new customer...");
}

function generateReport() {
    console.log("Generating system report...");
}

function exportData() {
    console.log("Exporting dashboard data...");
}

function searchUser() {
    console.log("Searching for a user...");
}

