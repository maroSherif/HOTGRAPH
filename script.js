// Scroll to top while clicking on the logo img (footer)

document.getElementById("logo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animation while scrolling

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => {
  observer.observe(el);
});

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => {
  observer.observe(el);
});

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => {
  observer.observe(el);
});

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => {
  observer.observe(el);
});


