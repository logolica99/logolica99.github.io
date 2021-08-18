const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mobMenu = document.querySelector("#mobMenu")
hamburgerBtn.addEventListener("click",()=>{
    mobMenu.classList.toggle("non-active-menu");
    hamburgerBtn.classList.toggle("burger-active")
    mobMenu.classList.toggle("active-menu")
})