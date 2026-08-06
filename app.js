//Ride-Hailing Website Javascript

//Welcome message
window.onload = function () {
  console.log("Welcome to the Ride-Hailing App!");

  alert("Welcome! Book your ride quickly and safely.");
};

//Select the Book Now button
const bookButton =
document.querySelector("button");

//Check if the button exists before adding an event
if (bookButton) {
  bookButton.addEventListener("click",function (){
    alert("Redirecting you to the Ride Booking page...")
    window.location.href ="book-ride.html";
  })
}

//display the current year in the footer (if a footer exists)
const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML += `<p>&copy; ${newDate().getFullYear()} Ride Hailing App.All rights reserved.</p>`;
}