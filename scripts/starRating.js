document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingStatus = document.getElementById("rating-value");
  
    stars.forEach((star) => {
        star.addEventListener("click", () => {
          const value = parseFloat(star.getAttribute("data-value")).toFixed(1);
          ratingStatus.textContent = value;
        
        stars.forEach((s) => s.classList.remove("active"));
        
        for (let i = 0; i < value; i++) {
          stars[i].classList.add("active");
        }
      });
    });
  });
  