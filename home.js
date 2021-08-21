const hamburgerBtn = document.querySelector("#hamburgerBtn");
const mobMenu = document.querySelector("#mobMenu")
hamburgerBtn.addEventListener("click",()=>{
    mobMenu.classList.toggle("non-active-menu");
    hamburgerBtn.classList.toggle("burger-active")
    mobMenu.classList.toggle("active-menu")
})

gsap.from('.nav-link',{opacity:0,duration:.8,stagger:0.1,y:"-100%",})

gsap.from(".side-social",{opacity:0,delay:1.7,duration:.8})

gsap.from("#main-text", { opacity: 0, duration: .8, delay: .8, y: "100%", stagger: .1 })
gsap.from(".footer", { opacity: 0, delay: 1.7, duration: .8 })

