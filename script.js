let cart = 0;
let total = 0;


function addCart(){

    cart++;

    document.getElementById("cart-count").innerHTML = cart;


    document.getElementById("cart-items").innerHTML = 
    `
    <p>
    Product added successfully
    </p>
    `;


    total = total + 999;


    document.getElementById("cart-total").innerHTML = total;

}




function openCart(){

    document.getElementById("cart-sidebar").classList.add("active");

}




function closeCart(){

    document.getElementById("cart-sidebar").classList.remove("active");

}