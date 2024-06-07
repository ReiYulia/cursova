const text_0=document.getElementById('reviews-0');
const text_1=document.getElementById('reviews-1');
const text_2=document.getElementById('reviews-3');
const text_3=document.getElementById('reviews-4');
const btn1=document.getElementById('btn-1');
const btn2=document.getElementById('btn-2');
const btn3=document.getElementById('btn-3');
const btn4=document.getElementById('btn-4');


btn1.addEventListener("click",()=>{
    text_0.style.display="block";
    text_1.style.display="none";
    text_2.style.display="none";
    text_3.style.display="none";
})
btn2.addEventListener("click",()=>{
    text_0.style.display="none";
    text_1.style.display="block";
    text_2.style.display="none";
    text_3.style.display="none";
})
btn3.addEventListener("click",()=>{
    text_0.style.display="none";
    text_1.style.display="none";
    text_2.style.display="block";
    text_3.style.display="none";
})
btn4.addEventListener("click",()=>{
    text_0.style.display="none";
    text_1.style.display="none";
    text_2.style.display="none";
    text_3.style.display="block";
})

const scroll_main = document.querySelector('#body');
scroll_main.addEventListener("DOMContentLoaded",function(){
    window.scrollTo(0,4800);
});