let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(name, price, image) {

    const existing = cart.find(item => item.name === name);

    if(existing){

        existing.qty++;

    }else{

        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });

    }

    updateCart();

}



function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

    total += item.price * item.qty;

    cartItems.innerHTML += `

    <div class="cart-product">

        <img src="${item.image}">

        <div class="cart-info">

            <h4>${item.name}</h4>

            <p>₹${item.price}</p>

            <div class="qty">

                <button onclick="decreaseQty(${index})">-</button>

                <span>${item.qty}</span>

                <button onclick="increaseQty(${index})">+</button>

            </div>

        </div>

        <button class="remove-btn" onclick="removeItem(${index})">
            🗑
        </button>

    </div>

    `;

});
    if(cart.length===0){

        cartItems.innerHTML="<p>Your cart is empty</p>";

    }

    cartCount.innerHTML = cart.length;
    cartTotal.innerHTML = total;

    localStorage.setItem("cart", JSON.stringify(cart));

}

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}

function openCart(){

    document.getElementById("cart-sidebar").classList.add("active");

}

function closeCart(){

    document.getElementById("cart-sidebar").classList.remove("active");

}function increaseQty(index){

    cart[index].qty++;

    updateCart();

}

function decreaseQty(index){

    if(cart[index].qty > 1){

        cart[index].qty--;

    }else{

        cart.splice(index,1);

    }

    updateCart();

}updateCart();