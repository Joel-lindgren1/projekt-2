let cart = {};


function addToCart(productName, quantity) {
    if (cart[productName]) {
        cart[productName] += quantity;
    } else {
        cart[productName] = quantity;
    }

    updateCartUI();
}


function updateCartUI() {
    const cartList = document.querySelector("#cartList");
    cartList.innerHTML = ''; 

    for (let productName in cart) {
        const listItem = document.createElement("li");
        listItem.textContent = `${cart[productName]}x ${productName}`;
        cartList.appendChild(listItem);
    }
}
