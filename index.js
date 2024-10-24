let lastScrollTop = 0;
const header = document.querySelector("#Header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop;
});

//헤더 트리거
const trigger = document.querySelector(".trigger");
const sideBar = document.querySelector("#Header");

// 트리거 클릭 시 사이드바 열기/닫기
trigger.addEventListener("click", (e) => {
  e.stopPropagation(); // 이벤트 전파 중지
  sideBar.classList.add("clickTrigger"); // 클래스 토글로 사이드바 열기/닫기
});

// 사이드바 외부 클릭 시 닫기
document.addEventListener("click", (e) => {
  if (!sideBar.contains(e.target) && !trigger.contains(e.target)) {
    sideBar.classList.remove("clickTrigger"); // 사이드바 닫기
  }
});
