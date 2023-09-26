"use strict";AOS.init();var slide_mobile_case=new Swiper(".slide-cases-mobile",{slidesPerView:1,speed:600,pagination:{el:".s-cases .container .slide-cases-mobile .swiper-pagination",type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1}},on:{init:function(){console.log("swiper initialized")}}}),btnScrollTop=document.getElementById("js-btn-scroll-top"),imgBtnScrollTop=document.getElementById("js-img-footer"),header=(btnScrollTop&&(btnScrollTop.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),btnScrollTop.addEventListener("mouseover",function(){imgBtnScrollTop.setAttribute("src","/assets/icons/icon-arrow-up-footer-black.svg")}),btnScrollTop.addEventListener("mouseleave",function(){imgBtnScrollTop.setAttribute("src","/assets/icons/icon-arrow-up-footer-black.svg")})),document.getElementById("js-header"));function fixedMenu(){50<window.pageYOffset?header.classList.add("changeHeight"):header.classList.remove("changeHeight")}document.addEventListener("scroll",fixedMenu);var progressSlide=document.querySelector(".js-progress"),swiper=new Swiper(".slide-principal",{autoplay:{delay:5e3,disableOnInteraction:!1},effect:"fade",pagination:{el:".slide-principal .swiper-pagination",clickable:!0,type:"fraction"},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),slide_image_cases=new Swiper(".slide-image-cases",{slidesPerView:"auto",spaceBetween:8,loop:!0,speed:800,centeredSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,pagination:{el:".s-cases .ctrl-slide .pagination-box-cases"},navigation:{nextEl:".s-cases .ctrl-slide .btn-next",prevEl:".s-cases .ctrl-slide .btn-prev"}}),slide_about_case=new Swiper(".slide-about-case",{spaceBetween:40,direction:"vertical",speed:800,pagination:{el:".s-cases .ctrl-slide .page-fraction",type:"fraction",clickable:!1},navigation:{nextEl:".s-cases .ctrl-slide .btn-next",prevEl:".s-cases .ctrl-slide .btn-prev"},simulateTouch:!1,thumbs:{swiper:slide_image_cases}}),menuButton=document.getElementById("js-menu-button"),menuSections=(menuButton&&menuButton.addEventListener("click",function(){menuButton.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")}),document.querySelectorAll(".menu-mobile-items")),buttonModal=(menuSections.forEach(function(e){e.addEventListener("click",function(){menuButton.classList.remove("is-active"),document.documentElement.classList.remove("menu-opened")})}),document.querySelectorAll(".js-open-modal")),buttonsModal=document.querySelectorAll(".js-open-modal"),btnCloseModal=document.querySelector(".js-close-modal"),modal=document.querySelector(".modal"),modalTitle=modal.querySelector(".modal-title"),modalContent=modal.querySelector(".modal-content p"),modalImage=modal.querySelector(".image-case img"),tagHtml=document.documentElement;function openModalWithDynamicContent(e,t,o,n){e=document.querySelector("#".concat(e));e&&(modalTitle.textContent=t,modalContent.textContent=o,modalImage.src=n,document.documentElement.classList.add("open-modal"),toggleOverflowHidden(e))}function openModal(){document.documentElement.classList.add("open-modal"),toggleOverflowHidden(modal)}function closeModal(){document.documentElement.classList.remove("open-modal"),toggleOverflowHidden(modal)}function toggleOverflowHidden(e){e.classList.contains("open-modal")?document.body.style.overflow="hidden":document.body.style.overflow="auto"}document.addEventListener("keydown",function(e){"Escape"===e.key&&tagHtml.classList.remove("open-modal")}),document.addEventListener("click",function(e){e.target.closest(".js-open-modal")||e.target.closest(".modal .box")||tagHtml.classList.remove("open-modal")}),buttonsModal.forEach(function(e){e.addEventListener("click",function(e){openModal(e.target.getAttribute("data-target"),e.target.getAttribute("data-title"),e.target.getAttribute("data-content"),e.target.getAttribute("data-image"))})}),buttonModal.forEach(function(e){e.addEventListener("click",openModal)}),btnCloseModal.addEventListener("click",closeModal);