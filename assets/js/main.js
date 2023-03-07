let closeIcon = document.querySelector(".close_icon");
let menuIcon = document.querySelector(".menu_icon");
let hiddenNav = document.querySelector(".hidden_nav");
let hiddenLink = document.querySelectorAll(".hidden_link");

menuIcon.addEventListener('click', function (){
    hiddenNav.style.display = "flex";
    document.body.style.overflow = "hidden";
})

hiddenLink.forEach(element => {
    element.addEventListener('click', ()=>{
        hiddenNav.style.display = "none";
        document.body.style.overflow = "visible";
    })
});

closeIcon.addEventListener('click', function (){
    hiddenNav.style.display = "none";
    document.body.style.overflow = "visible";
})