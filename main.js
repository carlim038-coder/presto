let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.nav-link'); // 1. Selezioniamo tutti i link
let logoNavbar = document.querySelector('#logoNavbar'); // 2. Selezioniamo il logo della navbar
window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');

        
        // Cambio colore dei link quando la navbar diventa gialla
        links.forEach((link) => {
            link.style.color = 'black'; 

        });
        logoNavbar.src='./media/logo nero.png'; // Cambia il logo quando la navbar diventa gialla
    } else {
        navbar.classList.remove('bg-yellow');
        navbar.classList.add('bg-black');
        logoNavbar.src='./media/logo giallo.png'; // Ripristina il logo quando la navbar torna nera

        // Ripristino colore dei link quando la navbar torna nera
        links.forEach((link) => {
            link.style.color = 'var(--yellow)'; 
        });
    }
});