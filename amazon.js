// Intersection Observer 공통 설정 함수
const createIntersectionObserver = (targetSelector, leftClass, rightClass) => {
  const observerOptions = {
    root: null, // 뷰포트를 기준으로 관찰
    rootMargin: "0px", // 뷰포트와의 여백
    threshold: 0.4, // 40% 이상 보일 때 콜백 실행
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // left와 right 클래스 추가
        if (leftClass) {
          document
            .querySelectorAll(leftClass)
            .forEach((el) => el.classList.add("fade-inL"));
        }
        if (rightClass) {
          document
            .querySelectorAll(rightClass)
            .forEach((el) => el.classList.add("fade-in"));
        }
      }
    });
  };

  // IntersectionObserver 생성
  const observer = new IntersectionObserver(callback, observerOptions);

  // 대상 요소 관찰
  const target = document.querySelector(targetSelector);
  if (target) {
    observer.observe(target);
  } else {
    console.error(`Target not found: ${targetSelector}`);
  }
};

// 각 섹션에 대해 Intersection Observer 설정
document.addEventListener("DOMContentLoaded", () => {
  createIntersectionObserver("#centerMain", ".leftMain", ".rightMain");
  createIntersectionObserver("#centerDetail", ".leftDetail", ".rightDetail");
  createIntersectionObserver("#centerCart", null, ".rightCart");
  createIntersectionObserver("#Mlogin", null, ".rightCart"); // 중복된 클래스 확인 필요
  createIntersectionObserver("#Mcart", ".leftMcart", null);
  createIntersectionObserver("#Prime", null, ".rightprime");
});
