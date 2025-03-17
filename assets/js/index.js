const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('close-overlay');

menuToggle.addEventListener('click', () => {
    overlay.classList.add('active'); 
});

closeOverlay.addEventListener('click', () => {
    overlay.classList.remove('active'); 
});

document.addEventListener("DOMContentLoaded", function() {
    if (!window.location.hash) {
        window.location.hash = "#home"; // Imposta la Home come sezione predefinita
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const goToTopButton = document.getElementById("goToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 800) { 
            goToTopButton.style.display = "flex";
        } else {
            goToTopButton.style.display = "none";
        }
    });

    goToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});