// MOBILE MENU

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


// SEARCH OPEN

function openSearch() {

    document.getElementById("searchBox").style.display = "block";

    document.getElementById("searchInput").focus();

}


// SEARCH CLOSE

function closeSearch() {

    document.getElementById("searchBox").style.display = "none";

}


// SEARCH PRODUCTS

function searchProducts() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const name = product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(input)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ADD TO CART

function addToCart(productName) {

    alert(productName + " added to your bag!");

}


// NEWSLETTER

function subscribe() {

    const email = document.getElementById("email").value;

    if (email === "") {

        alert("Please enter your email.");

    } else {

        alert("Thank you for subscribing to ICONWEAR!");

        document.getElementById("email").value = "";

    }

}