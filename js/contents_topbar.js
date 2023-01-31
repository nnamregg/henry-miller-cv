const menuToggler = document.querySelector('.sticky_topbar__toggler')

menuToggler.addEventListener('click', (e) => {
    const btn = e.currentTarget
    const menu = btn.offsetParent.children[1]

    btn.classList.toggle('active')
    menu.classList.toggle('expanded')

    if (menu.style.maxHeight){
        menu.style.maxHeight = null;
    } else {
        menu.style.maxHeight = menu.scrollHeight + 'px';
    }

})