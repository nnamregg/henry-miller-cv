// const asHimselfToggler = document.getElementById('movies_self_expand')
// const byActorsToggler = document.getElementById('movies_actors_expand')

const sections = document.querySelectorAll('.movies_section')
const togglers = document.querySelectorAll('.movies_toggle')


function isSectionExpanded(id) {
    // console.log('id -> ', id)
    const idStr = id.slice(0, id.indexOf('_'))
    // console.log('idStr -> ', idStr)

    const section = document.getElementById(`miller_${idStr}`);
    const classes = section.classList
    classes.toggle('expanded')

}

window.onload = () => {
    console.log('togglers -> ', togglers)
    
    for(let toggler of togglers) {
        toggler.addEventListener('click', (e) => {
            // console.log(e)
            isSectionExpanded(e.target.id)

        })
    }
}
/* 
asHimselfToggler.addEventListener('click', (e) => {
    console.log('event -> ', e)

}) */