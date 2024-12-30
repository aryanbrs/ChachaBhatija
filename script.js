// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Floating Animation for Hero Image
function animateHeroImage() {
  const heroImage = document.querySelector(".hero-image");
  if (!heroImage) return;

  let floatDirection = 1;
  let currentOffset = 0;

  function float() {
    currentOffset += 0.5 * floatDirection;
    heroImage.style.transform = `translateY(${currentOffset}px)`;

    if (currentOffset >= 10 || currentOffset <= -10) {
      floatDirection *= -1;
    }

    requestAnimationFrame(float);
  }

  float();
}

animateHeroImage();

// Course Button Hover Animation
document.querySelectorAll(".course .btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#e76f51";
    button.style.transform = "scale(1.1)";
    button.style.transition = "all 0.3s";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#f4a261";
    button.style.transform = "scale(1)";
  });
});

// Testimonial Carousel (Auto-scroll)
const testimonialList = document.querySelector(".testimonial-list");
if (testimonialList) {
  let scrollAmount = 0;

  function scrollTestimonials() {
    scrollAmount += 1;
    testimonialList.scrollLeft = scrollAmount;

    if (
      scrollAmount >=
      testimonialList.scrollWidth - testimonialList.clientWidth
    ) {
      scrollAmount = 0;
    }

    requestAnimationFrame(scrollTestimonials);
  }

  scrollTestimonials();
}

// Contact Form Submission Alert
document
  .querySelector("#contact form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    this.reset();
  });
