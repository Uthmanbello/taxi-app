document.addEventListener("DOMContentLoaded", function () {
  const rideOptions = document.getElementById("ride-options");
  const bookingAmount = document.querySelector(".booking-amount");

  rideOptions.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const amount = event.target.querySelector(".amount").textContent;
      bookingAmount.textContent = amount;
    }
  });
});
  