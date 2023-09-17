document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("nav-icon");
    const panel = document.getElementById("panel");
  
    navIcon.addEventListener("click", function () {
      navIcon.classList.toggle("close");
      panel.classList.toggle("show");
    });
  
    panel.addEventListener("click", function () {
      navIcon.classList.remove("close");
      panel.classList.remove("show");
    });
  });
  