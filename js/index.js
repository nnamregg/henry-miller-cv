// NAVBAR

const navLinks = document.querySelectorAll('.nav_items__link')

// Clases dinámicas para link actual
window.onload = function(e) {
    // const navLinks = document.querySelectorAll(".nav_items__link")
    if(!isMobile) {
        setNavLinksDark()
    }

    for (let link of navLinks) {
        const anchor = link.firstChild
        if (anchor == window.location.href) {
        anchor.classList.add('active')
        anchor.setAttribute('aria-current','page')
        }
    }

    // console.log(window.innerWidth)
}

let isMobile = window.innerWidth < 1200

window.onresize = () => {
    isMobile = window.innerWidth < 1200

    if(isMobile) {
        setNavLinksLight()
    } else {
        setNavLinksDark()
    }
}

const setNavLinksLight = () => {
    for(let link of navLinks){
        let anchor = link.firstChild
        anchor.classList.remove('text-dark')
        anchor.classList.add('text-light')
    }
}

const setNavLinksDark = () => {
    for(let link of navLinks){
        let anchor = link.firstChild
        anchor.classList.remove('text-light')
        anchor.classList.add('text-dark')
    }
}

// Esconder/mostrar navbar al scrollear
window.onscroll = function(e) { 
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('navbar_logo');
    const burgerMenu = document.querySelector('.navbar_toggle_btn')
    // const navLinks = document.querySelectorAll('.nav_items__link')

    const navAnimIn = () => {
        navbar.style.transform = "translateY(0)"
    }
    
    const navAnimOut = () => {
        navbar.style.transform = "translateY(-100%)"
    }

    scrollY <= this.lastScroll
        ? navAnimIn()
        : navAnimOut();

    // Toggle background
    const addBackground = () => {
        logo.src = './img/Henry_Miller_signature_zinc-200.svg'
        
        burgerMenu.classList.remove('text-dark')
        burgerMenu.classList.add('text-light')

        if(!isMobile) {
            navbar.classList.add('bg-dark','shadow')
            setNavLinksLight()
        }
    }

    const removeBackground = () => {
        logo.src = './img/Henry_Miller_signature.svg'

        burgerMenu.classList.remove('text-light')
        burgerMenu.classList.add('text-dark')

        if(!isMobile) {
            navbar.classList.remove('bg-dark','shadow')
            setNavLinksDark()
        }
    }

    scrollY > 0
        ? addBackground()
        : removeBackground()

    this.lastScroll = scrollY ;
}

// Menu toggler en mobile
const navbarToggle = navbar.querySelector('#navbar_toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);

    if(isNavbarExpanded) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
}

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#nav_menu');
const navbarLinksContainer = navbarMenu.querySelector('.nav_items');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());

navbarMenu.addEventListener('click', toggleNavbarVisibility);

