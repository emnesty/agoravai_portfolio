// Script Data AOS Animation
AOS.init()

// Script for Mobile Navigation
const slide_mobile_case = new Swiper(".slide-cases-mobile", {
  slidesPerView: 1,
  speed: 600,
  pagination: {
    el: ".s-cases .container .slide-cases-mobile .swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },
  // ...
  on: {
    init: function () {
      console.log("swiper initialized")
    },
  },
})

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
      imgBtnScrollTop.setAttribute("src", "/assets/icons/icon-arrow-up-footer-black.svg")
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

// Add class active to menu mobile button
const menuButton = document.getElementById("js-menu-button")
if (menuButton) {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active") // add the CSS configuration on this button
    document.documentElement.classList.toggle("menu-opened")
  })
}
const menuSections = document.querySelectorAll(".menu-mobile-items")

menuSections.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuButton.classList.remove("is-active")
    document.documentElement.classList.remove("menu-opened")
  })
})

//Abrir Modal
const buttonModal = document.querySelectorAll(".js-open-modal")
const buttonsModal = document.querySelectorAll(".js-open-modal")
const btnCloseModal = document.querySelector(".js-close-modal")
const modal = document.querySelector(".modal")
const modalTitle = modal.querySelector(".modal-title")
const modalContent = modal.querySelector(".modal-content p")
const modalImage = modal.querySelector(".image-case img")
const tagHtml = document.documentElement

// Apertar ESC e fechar o modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    tagHtml.classList.remove("open-modal")
  }
})

// Clicar fora do Modal e Fechar
document.addEventListener("click", (event) => {
  if (event.target.closest(".js-open-modal")) return
  if (!event.target.closest(".modal .box")) {
    tagHtml.classList.remove("open-modal")
  }
})

// Função para abrir o modal com conteúdo personalizado
function openModalWithDynamicContent(targetModal, title, content, image) {
  const modal = document.querySelector(`#${targetModal}`)
  if (!modal) return

  // Defina o conteúdo personalizado
  modalTitle.textContent = title
  modalContent.textContent = content
  modalImage.src = image

  // Adicione a classe para abrir o modal
  document.documentElement.classList.add("open-modal")
  toggleOverflowHidden(modal)
}

// Adicione ouvintes de eventos para cada botão de abertura de modal
buttonsModal.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetModal = event.target.getAttribute("data-target")
    const title = event.target.getAttribute("data-title")
    const content = event.target.getAttribute("data-content")
    const image = event.target.getAttribute("data-image")
    openModal(targetModal, title, content, image)
  })
})

//Abrir Modal ao clicar no botão
function openModal() {
  document.documentElement.classList.add("open-modal")
  // Add the overflow: hidden property to the body element
  toggleOverflowHidden(modal)
}

function closeModal() {
  document.documentElement.classList.remove("open-modal")
  // Remove the overflow: hidden property from the body element
  toggleOverflowHidden(modal)
}

buttonModal.forEach((card) => {
  card.addEventListener("click", openModal)
})

btnCloseModal.addEventListener("click", closeModal)

// Function to add and remove overflow hidden from the body element
function toggleOverflowHidden(modal) {
  // Check if the modal is open
  if (modal.classList.contains("open-modal")) {
    // Add the overflow: hidden property to the body element
    document.body.style.overflow = "hidden"
  } else {
    // Remove the overflow: hidden property from the body element
    document.body.style.overflow = "auto"
  }
}
