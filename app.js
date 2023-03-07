let openBtn = document.getElementById("nav-open")
let closeBtn = document.getElementById("nav-close")
let navLatteral = document.getElementById("nav-lateral")
let main = document.getElementById("main")

const openNav = () => {
    navLatteral.style.right = "0";
}
const closeNav = () => {
    navLatteral.style.right = "-200%";
}
const pageScroll = () => {
    main.scrollBy(0,5);
    scrolldelay = setTimeout(pageScroll,1);    
}



openBtn.addEventListener("click",openNav)
closeBtn.addEventListener("click", closeNav)
main.addEventListener("click", pageScroll)
