const hamburgerBtn = document.querySelectorAll('.menu-icon');
const nav = document.querySelector('nav');

hamburgerBtn.forEach(el => {
    el.addEventListener("click", ()=>{
        nav.classList.toggle('open')
    })
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 1024 && nav.classList.contains('open')){
    nav.classList.remove('open')
    console.log(window.innerWidth)
    }
})
