// NAVBAR

// Clases dinámicas para link actual

window.onload = function(e) {
    const navLinks = document.querySelectorAll(".nav_items__link")
    
    for (let link of navLinks) {
        const anchor = link.firstChild
        if (anchor == window.location.href) {
        anchor.classList.add('active')
        anchor.setAttribute('aria-current','page')
        }
    }
}


// Esconder/mostrar navbar al scrollear

window.onscroll = function(e) { 
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('navbar-logo');
    const navLinks = document.querySelectorAll('.nav_items__link')

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
        navbar.classList.add('bg-dark','shadow')
        logo.src = './img/Henry_Miller_signature_zinc-200.svg'
        for(let link of navLinks){
            let anchor = link.firstChild
            anchor.classList.remove('text-dark')
            anchor.classList.add('text-light')
        }
    }

    const removeBackground = () => {
        navbar.classList.remove('bg-dark','shadow')
        logo.src = './img/Henry_Miller_signature.svg'
        for(let link of navLinks){
            let anchor = link.firstChild
            anchor.classList.remove('text-light')
            anchor.classList.add('text-dark')
        }
    }

    scrollY > 0
        ? addBackground()
        : removeBackground()

    this.lastScroll = scrollY ;
}


