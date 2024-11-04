const wfSlide = document.querySelector(".wfSlide");
const imgs = Array.from(wfSlide.children);

imgs.forEach((img) => {
  const clone = img.cloneNode(true);
  wfSlide.appendChild(clone);
});

["mouseenter", "mouseleave"].forEach((event) => {
  wfSlide.addEventListener(event, () => {
    wfSlide.style.animationPlayState =
      event === "mouseenter" ? "paused" : "running";
  });
});

const animatedElements = document.querySelectorAll(
  ".lefttImg, .rightImg, .info, .flow, .homeImg"
);

// Intersection Observer 생성
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.8 }
);

animatedElements.forEach((element) => observer.observe(element));
