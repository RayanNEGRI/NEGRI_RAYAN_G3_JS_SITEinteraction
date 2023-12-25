"use strict";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  document.addEventListener("DOMContentLoaded", function(){
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click",function() {

        menu.classList.toggle("active");
    }
    )
}

)

let body = document.querySelector("body");
let bt = document.querySelector("button");

let b = 0;
function changeCouleurNoir(){
    if(b==0){
        body.style.background="black";
        b=1;
    }else{
        body.style.background="white";
        b=0;
    }
}
bt.addEventListener("click",changeCouleurNoir);
console.log(bt);