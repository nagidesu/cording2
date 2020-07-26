
window.addEventListener("scroll",function(){
    const scroll = document.documentElement.scrollTop; 

    if (scroll > 500) {
        document.getElementById("header_nav").classList.add("fixed");
    } else {
        document.getElementById("header_nav").classList.remove("fixed");
    }
})

window.addEventListener('DOMContentLoaded',function(){
    document.getElementById("menu_bar").addEventListener("click",function(){
        this.classList.toggle("menu_bar_active");

        document.getElementById("res_menu").classList.toggle("res_menu_active");
    })
})

window.addEventListener('DOMContentLoaded',function(){
    document.getElementById("res_menu").addEventListener("click",function(){
        this.classList.remove("res_menu_active");

        document.getElementById("menu_bar").classList.remove("menu_bar_active");
    })
})





