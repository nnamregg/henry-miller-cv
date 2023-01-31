const buttons = document.getElementsByClassName('movies_collapsible');

for (let btn of buttons) {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.parentNode.previousSibling.previousSibling;
        
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
  });

} 