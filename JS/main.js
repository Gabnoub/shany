// =================================== Automatic Caroussel with Loadbars =============================================//
const images = document.querySelector(".caroussel__container");
const progressBars = document.querySelectorAll(".progress-bar");
const progressBars__cat = document.querySelectorAll(".progress-bar__cat");
const Cats = document.querySelector(".categories__item");

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

// =======================================  Activate and desactivate category  ==========================================//
// Sélection de la barre de progression
const pb = document.getElementById("pbc");
const productContainer = document.getElementById("productContainer");
const products = [
    ["<img src=\"images/1.jpg\">", "Collier perlé", "Bracelet élégant","Bague en or"],
    ["Montre classique", "Montre connectée", "Montre en cuir","Bague en or"],
    ["Sac à main", "Lunettes de soleil", "Ceinture en cuir","Bague en or"],
    ["Nouveaux bijoux", "Nouvelles montres", "Nouveaux accessoires","Bague en or"]
];

currentCat(0);
function currentCat(index) {
    // Déplacer la barre progressive sous le bouton sélectionné
    const test = document.querySelector('.categories__item:nth-child(1)');
    const breite = test.offsetWidth;
    console.log(breite);
    // const style = window.getComputedStyle(element);
    // const breite = style.getPropertyValue('width');
    const index_cat = (index-2) % 4;
    // pb.style.transform = `translateX(${index * 100}%)`;
    pb.style.transform = `translateX(${index_cat * breite}px)`;

    // Mettre à jour le contenu des produits
    if (products.length <= 8) {
        
    }
    productContainer.innerHTML = products[index]
                .map(item => `<div class="product-item">${item}</div>`)
                .join("");
    
}

