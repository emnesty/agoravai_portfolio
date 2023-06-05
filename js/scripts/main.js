// Script Data AOS Animation
AOS.init()

// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top")
const imgBtnScrollTop = document.getElementById("js-img-footer")
if (btnScrollTop) {
  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }),
    btnScrollTop.addEventListener("mouseover", () => {
      imgBtnScrollTop.setAttribute("src", "/assets/icons/icon-arrow-up-footer-black.svg")
    }),
    btnScrollTop.addEventListener("mouseleave", () => {
      imgBtnScrollTop.setAttribute("src", "/assets/icons/icon-arrow-up-footer.svg")
    })
}
// Add class active to menu button
const menuButton = document.getElementById("js-menu-button")
if (menuButton) {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active") // add the CSS configuration on this button
    document.documentElement.classList.toggle("menu-opened")
  })
}

// Menu Header Change >20 scroll
const header = document.getElementById("js-header")
function fixedMenu() {
  if (window.pageYOffset > 50) {
    header.classList.add("changeHeight")
  } else {
    header.classList.remove("changeHeight")
  }
}
document.addEventListener("scroll", fixedMenu)

const progressSlide = document.querySelector(".js-progress") // get progress bar

// Script for Hero Slide
const swiper = new Swiper(".slide-principal", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // autoplay nao para de funcionar
  },
  effect: "fade",
  pagination: {
    el: ".slide-principal .swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  on: {
    // get some elements from swiper slide
    init: function () {
      // when slide starts
      progressSlide.classList.remove("animate")
      progressSlide.classList.remove("active")
      progressSlide.classList.add("animate") // faz a barra crescer
      progressSlide.classList.add("active") // da opacidade
    },
    slideChangeTransitionStart: function () {
      // when the transition start
      progressSlide.classList.remove("animate")
      progressSlide.classList.remove("active")
      progressSlide.classList.add("active")
    },
    slideChangeTransitionEnd: function () {
      // when the transiction finish
      progressSlide.classList.add("animate") // um apos o outro - nao pode adicionar junto
    },
  },
})

// Script for Slide Image Cases
const slide_image_cases = new Swiper(".slide-image-cases", {
  slidesPerView: "auto",
  spaceBetween: 8,
  loop: !0,
  speed: 800,
  centeredSlides: !0,
  watchSlidesVisibility: !0,
  watchSlidesProgress: !0,
  pagination: {
    el: ".s-cases .ctrl-slide .pagination-box-cases",
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev",
  },
})
// Script for Slide About Cases
const slide_about_case = new Swiper(".slide-about-case", {
  spaceBetween: 40,
  direction: "vertical",
  speed: 800,
  pagination: {
    el: ".s-cases .ctrl-slide .page-fraction",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev",
  },
  simulateTouch: !1,
  thumbs: {
    swiper: slide_image_cases,
  },
})
