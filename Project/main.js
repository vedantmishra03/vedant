//Slider 

const progressCircle = document.querySelector(".home");
    const progressContent = document.querySelector(".home");
    var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });