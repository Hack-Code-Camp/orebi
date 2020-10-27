// Variables
let hoverState = document.querySelector(".imageForEffect");
let hoverEffect = document.querySelector(".hover-effect");



// EventListener

    hoverState.addEventListener("mouseover", display);
    hoverState.addEventListener("mouseout" , hide);


    // Function
 function display(){
     hoverEffect.style.display = "block"
 }
 function hide(){
     hoverEffect.style.display = "none";
 }