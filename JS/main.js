// =================================== Automatic Caroussel with Loadbars =============================================//
const images = document.querySelector(".caroussel__container");
const progressBars = document.querySelectorAll(".progress-bar");

const slides = document.querySelectorAll(".caroussel__image");

let index = 0;
const totalImages = document.querySelectorAll(".caroussel__container img").length;

function changeImage() {
    index = (index + 1) % totalImages;
    // images.style.transform = `translateX(-${index * 100}%)`;

    progressBars.forEach(bar => bar.classList.remove("active"));
    progressBars[index].classList.add("active");


    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

const myinterval = setInterval(changeImage, 3000);

// Activer la première barre au démarrage
progressBars[index].classList.add("active");

// =================================== Currentslide show and stop automatic caroussel=============================================//

function currentSlide(i) {

    // Stop automatic mode
    clearInterval(myinterval);

    progressBars.forEach(bar => bar.classList.remove("active"));
    progressBars.forEach(bar => bar.classList.remove("active__after_clicked"));

    slides.forEach(slide => slide.style.display = "none");
    index = i;
    progressBars[index].classList.add("active__after_clicked");
    slides[index].style.display = "block";

}
// =======================================  Activate and desactivate drop-down menu  ==========================================//

const navLinks = document.querySelector(".nav__links");
const menuBtn = document.getElementById("menu__icon");
// const menuBtnClose = document.getElementById("menu__icon-close");
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    menuBtn.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
}
)

document.addEventListener("click", function (event) {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    }
})
