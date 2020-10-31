// Variables
const products = document.getElementById("product");

const Arrivals = document.getElementById("newarrivals");

const hoverState = document.querySelectorAll(".imageForEffect");

const hoverEffect = document.querySelectorAll(".hover-effect");









// Event listener
products.addEventListener("click", showDetails);

hoverState.forEach(card =>{
    card.addEventListener('mouseover', display);
    card.addEventListener("mouseout" , hide);
})







// Functions
function showDetails(e) {  
    
    window.location.href = "../product_inside/product_inside.html";

    
    e.preventDefault();
}
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
