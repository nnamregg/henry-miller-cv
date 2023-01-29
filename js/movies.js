
const buttons = document.getElementsByClassName("movies_collapsible");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.parentNode.previousSibling.previousSibling;
        
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
  });

} 