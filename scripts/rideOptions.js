document.addEventListener("DOMContentLoaded", function () {
  const chooseRide = document.getElementById("choose-ride");
  const rideOptions = document.getElementById("ride-options");

  chooseRide.addEventListener("click", function () {
    rideOptions.classList.toggle("show");
    chooseRide.classList.toggle("active");
  });
});
  