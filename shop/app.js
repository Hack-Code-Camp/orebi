// Variables
const products = document.getElementById("product");











// Event listener
products.addEventListener("click", showDetails);












// Functions
function showDetails(e) {  
    
    window.location.href = "../product_inside/product_inside.html";

    
    e.preventDefault();
}