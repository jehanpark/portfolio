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

document.addEventListener("DOMContentLoaded", () => {
  const slideWrapper = document.querySelector(".slideWarpp");
  const boxes = slideWrapper.querySelectorAll(".enswerBox, .enswerBoxY");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // 요소가 뷰포트에서 벗어나면 마지막 위치로 이동
          slideWrapper.appendChild(entry.target);
        }
      });
    },
    { root: slideWrapper, threshold: 0 }
  );

  boxes.forEach((box) => observer.observe(box));
});
