// Variables
const Arrivals = document.getElementById("newarrivals");

const hoverState = document.querySelectorAll(".imageForEffect");

const hoverEffect = document.querySelectorAll(".hover-effect");




// EventListener

    hoverState.forEach(card =>{
         card.addEventListener('mouseover', display);
         card.addEventListener("mouseout" , hide);
    })



    // Function
 function display(e){
    if(e.target.classList.contains("imageForEffect")){
         e.target.nextElementSibling.nextElementSibling.style.display = "block";
     }
 }
  function hide(e){
     if(e.target.classList.contains("imageForEffect")){
        e.target.nextElementSibling.nextElementSibling.style.display = "none";
    }
 }



