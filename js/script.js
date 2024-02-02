const nav_btn = document.getElementById("navlist_btn");
const nav_list = document.getElementById("navbar");
const logo = document.getElementById("logo");
const services = document.getElementById("ourservice");
 function display_navbar(){
    nav_list.classList.toggle("active");
    nav_btn.classList.toggle("active");
}

function img_anim(){
    logo.classList.add('loaded');
    
}

function show(){
    services.classList.add('show');
}
function hid(){
    services.classList.remove('show');
}


