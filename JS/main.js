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

    
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
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
// =======================================                       =============================================//
function toggleMenu() {
    const navLinks = document.querySelector(".nav__links");
    navLinks.classList.toggle("active");
    console.log("test");
}