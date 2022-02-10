const slides_container = document.querySelector(".my_slider_list");
const slides_content = document.querySelectorAll(".slider_content");
const pre = document.querySelector(".pre_button");
const next_button = document.querySelector(".next_button");
const slide_length = slides_content.length;
let nowslide = 0; 

function skipSlider(num) {
    slides_container.style.left = - num * 600 + 'px'; 
    nowslide = num;
}

pre.addEventListener("click",function(){
    if(nowslide !== 0){skipSlider(nowslide-1)}});
next_button.addEventListener("click",function(){
    if(nowslide !== slide_length-1){skipSlider(nowslide+1)}});
