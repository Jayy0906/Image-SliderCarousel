const carousel = document.querySelector("#imageCarousel");

// Pause on hover
carousel.addEventListener("mouseover", () => {
  bootstrap.Carousel.getInstance(carousel).pause();
});

carousel.addEventListener("mouseout", () => {
  bootstrap.Carousel.getInstance(carousel).cycle();
});

// Optional: Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    bootstrap.Carousel.getInstance(carousel).prev();
  } else if (event.key === "ArrowRight") {
    bootstrap.Carousel.getInstance(carousel).next();
  }
});
