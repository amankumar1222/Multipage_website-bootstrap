console.log('aasan hai');

// Header Scroll 
let nav = document.querySelector(".navbar")
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled")
    }
    else{
        nav.classList.remove("header-scrolled") 
    }
}

// nav hide 

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")

navBar.forEach(function(e){
    e.addEventListener("click", ()=>{
        navCollapse.classList.remove("show")
    })
})