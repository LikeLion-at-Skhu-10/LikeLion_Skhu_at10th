const slides = document.querySelector('.slides-box');
const slideimg = document.querySelectorAll('.slide-li img');
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideimg.length;// 슬라이드 개수
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 1500;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num){
    slides.style.left = -num * 1600 + 'px';
    currentIdx = num;
}
//currnetIdx !==0 일때만 불러오기. 첫 슬라이드에서 왼쪽버튼눌러도 반응 x
prev.addEventListener('click', function(){
    if (currentIdx !== 0 ) moveSlide(currentIdx - 1);

});

next.addEventListener('click', function(){
    if (currentIdx !== slideCount-1){
        moveSlide(currentIdx + 1);
    }
});