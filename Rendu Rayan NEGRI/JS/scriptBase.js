"use strict";

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


//carousel


function tourneImage(){
    let monImage = document.getElementById("carousel").getAttribute("src");   //récupération de id et de attribut
    //mon image qui affecte l'attribut src de mon id carousel
    console.log(monImage);

    switch(monImage){
        case "Image/Integrale1GamesOfThrones.png":   //si l'image est griffon
            document.getElementById("carousel").src="Image/Integrale2GamesOfThrones.png";   //mettre chupababra
            break; //fin boucle
        case "Image/Integrale2GamesOfThrones.png":
            document.getElementById("carousel").src="Image/Integrale3GamesOfThrones.png";
            break;
        case "Image/Integrale3GamesOfThrones.png":
            document.getElementById("carousel").src="Image/Integrale4GamesOfThrones.png";
            break;
        case "Image/Integrale4GamesOfThrones.png":
            document.getElementById("carousel").src="Image/Integrale5GamesOfThrones.png";
            break;
        case "Image/Integrale5GamesOfThrones.png":
            document.getElementById("carousel").src="Image/Integrale1GamesOfThrones.png";
            break;
    }
}

let bta = document.getElementById("carousel"); // récupération de id
console.log(bta);
bta.addEventListener("click",tourneImage);//event qui s'active au click et active la fonction tourneImage

//swiper

