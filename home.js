window.addEventListener("scroll", function () {

  const scroll = window.scrollY;
  const img = document.querySelector(".zoom-me img");
  const header = document.querySelector(".zoom-me");

  const headerHeight = header.offsetHeight;

  if (scroll < headerHeight) {

    img.style.width = 100 + scroll / 5 + "%";
    img.style.top = -(scroll / 10) + "px";
    img.style.filter = "blur(" + scroll / 200 + "px)";
    img.style.opacity = "1";

  } else {
    // ヘッダーを超えたら完全に消す
    img.style.opacity = "0";
  }

});



// ScrollTriggerを有効化
gsap.registerPlugin(ScrollTrigger);

// テキストを1つずつ取得
gsap.utils.toArray(".fade-text span").forEach((line) => {

  gsap.to(line, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",

    scrollTrigger: {
      trigger: line,
      start: "top 75%",
      toggleActions: "play none none none"
    }
  });

});


const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,

  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   768: {
      slidesPerView: 3,
  //   },
  // },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // left and right arrow
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
