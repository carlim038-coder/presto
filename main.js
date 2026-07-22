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
// chiamate asincrone : setInterval (loop infiito) in cui possiamo gestire la durata delle interazione e vuole 2 paramentri - 
// per bloccarlo dobbiamo usare clearInterval
// --- Numeri incrementali (Chiamate Asincrone) ---
// Nota: corretti i selettori con il punto (classi) o cancelletto (ID) in base a come li hai scritti nell'HTML
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let thirdNumber = document.querySelector("#thirdNumber");

function createInterval(n, element, time) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < n) {
            counter++;
            if (element) {
                element.innerHTML = counter;
            }
        } else {
            console.log("adesso mi fermo");
            clearInterval(interval);
        }
    }, time);
}

// Avvio delle funzioni (corretto il nome della funzione da creatInterval a createInterval)
createInterval(100, firstNumber, 100);
createInterval(200, secondNumber, 50);
createInterval(300, thirdNumber, 30);
// intersection observer è una Classe che si occupa di far scattare una funzione nel momento in cui sul browser sono presenti gli elementi html che noi indichiamo 
let observer = new  IntersectionObserver( (entries)=>) {