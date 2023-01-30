
const titles = document.querySelectorAll('.biblio_span_title')
const popupDiv = document.getElementById('bookPopup')

// Loopeo todos los títulos disponibles y agrego evento click
for(let title of titles) {
    title.addEventListener("click", (e) => {
        const popupDiv = document.getElementById('bookPopup')
        const parent = e.target.parentNode 
        const isbn = parent.querySelector('.biblio_isbn').innerText.slice(5).replaceAll('-', '')

        popupDiv.classList.remove('show')

        getBookInfo(isbn)
            .then(data => makeBookPopup(data))

    })
}

// Fetch desde el API
async function getBookInfo(isbn) {
    const apiURL = `https://openlibrary.org/isbn/${isbn}.json`
    const response = await fetch(apiURL)
    
    return response.json()
}

// Inserto data del API en el popup y lo muestro
function makeBookPopup(data) {
    const title = document.getElementById('bookPopupTitle')
    const titleAnchor = title.firstElementChild
    const img = document.getElementById('bookPopupImg')

    titleAnchor.href = `https://openlibrary.org${data.key}`
    titleAnchor.innerText = data.title

    if(data.covers) {
        img.src = `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
        img.alt = data.title
    } else {
        img.src = './img/image_not_found.png'
        img.alt = 'Imagen no encontrada'
    }

    popupDiv.classList.add('show')
}

// Cierro el popup
const closeBtn = document.getElementById('bookPopupBtn')

closeBtn.addEventListener('click', () => {
    popupDiv.classList.remove('show')
})
