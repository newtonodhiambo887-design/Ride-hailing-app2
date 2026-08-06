// Select the booking form
const bookingForm = document.getElementById("bookingForm");

// Listen for form submission
bookingForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const rideType = document.getElementById("rideType").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Check if all fields are filled
    if (
        pickup === "" ||
        destination === "" ||
        rideType === "" ||
        date === "" ||
        time === ""
    ) {
        alert("Please fill in all the booking details.");
        return;
    }

    // Estimate fare
    let fare = 0;

    switch (rideType) {
        case "Economy":
            fare = 300;
            break;

        case "Standard":
            fare = 500;
            break;

        case "Premium":
            fare = 800;
            break;

        default:
            fare = 0;
    }

    // Show booking confirmation
    alert(
        "Ride Booked Successfully!\n\n" +
        "Pickup: " + pickup +
        "\nDestination: " + destination +
        "\nRide Type: " + rideType +
        "\nPickup Date: " + date +
        "\nPickup Time: " + time +
        "\nEstimated Fare: KSh " + fare
    );

    // Clear the form
    bookingForm.reset();
});

