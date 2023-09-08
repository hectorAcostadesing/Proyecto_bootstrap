window.addEventListener("scroll",function(){
    let header = this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})