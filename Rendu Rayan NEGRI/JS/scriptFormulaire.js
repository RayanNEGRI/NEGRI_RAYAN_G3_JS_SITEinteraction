"use strict";

//mdp
let passwordInput = document.getElementById("password");
function validatePassword(){

    let passwordError = document.getElementById("mdpError");
    // expression régulière pour vérifier la présence d'au moins une majuscule. Une minuscule et un caractère spécial.


    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{12,}$/;

    if(passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 12) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractére spécial, et faire au moins 12 caractères de long.";
    }
}

passwordInput.addEventListener("input",validatePassword);

//

let prenomInput = document.getElementById("pseudo");
let mailInput = document.getElementById("mail");
let selecteInput = document.getElementById("sel");


//

let submit = document.querySelector("#soumettre");


function alerte(){

    if(passwordInput.value.length >= 12 && prenomInput.value.length && mailInput.value.length && selecteInput.value.length >= 1)   {
        alert("Formulaire Complet");
    } else {
        alert("Incomplet");
    }



    
}

submit.addEventListener("click",alerte);




// -----------------------------------

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