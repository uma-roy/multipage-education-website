// Change Navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Show / hide FAQ questions
let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icon 
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } 
        else {
            icon.className = "fa-solid fa-plus";
        }        
    })
})

// Show/Hide Nav Menu 
const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
openMenuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
})
closeMenuBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
})