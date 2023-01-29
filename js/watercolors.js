// Obtengo elementos necesarios para manipular comportamiento y contenido del modal
const modal = document.getElementById("watercolorsModal")
const openBtns = document.querySelectorAll(".item_img_container")
const closeBtn = document.getElementsByClassName("watercolors_modal__btn")[0]
const modalImg = document.getElementById("watercolors_modal__img")
const modalTxt = document.getElementById("watercolors_modal__txt")

// Genero contenido de modal en base al thumbnail clickeado y lo muestro
function makeModal(target) {
    const src = target.src
    const filename = src.slice(src.lastIndexOf('/') + 1)
    const txt = target.parentNode.nextElementSibling.innerText
    
    modalImg.style.backgroundImage = `url('./img/watercolors/${filename}')`
    modalTxt.innerText = txt
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

// Oculto el modal
const closeModal = () => {
    modalImg.style.backgroundImage = null
    modalTxt.innerText = null
    modal.style.display = "none"
    document.body.style.overflow = "auto"
}

// Llamo a función para generar modal y su contenido al clickear cualquier thumbnail
for(let btn of openBtns) {
    btn.onclick = (e) => makeModal(e.target)
}

// Cierro el modal
// ...si el usuario clickea la (x)
closeBtn.onclick = () => closeModal()

// ...si el usuario clickea fuera de su contenedor
window.onclick = function(event) {
    if (event.target == modal) closeModal()
}