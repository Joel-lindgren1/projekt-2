
const container = document.querySelector(".varukorg ul");

function addItemToCart(itemName) {
    const newElement = document.createElement("li");
    newElement.textContent = itemName;
    container.appendChild(newElement);
}


document.addEventListener("DOMContentLoaded", () => {
    // Initialize: Add 'highlight' class to all '1' buttons
    document.querySelectorAll("#produkter button").forEach((button) => {
        if (button.textContent === "1") {
            button.classList.add("highlight");
        }
    });

    // Event listener for button clicks
    document.querySelector("#produkter").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const button = event.target;
            const parentDiv = button.parentElement;

            // Check if the button is '1' or '10' and toggle highlighting
            if (button.textContent === "1" || button.textContent === "10") {
                parentDiv.querySelectorAll("button").forEach((btn) => {
                    if (btn.textContent === "1" || btn.textContent === "10") {
                        btn.classList.remove("highlight");
                    }
                });
                button.classList.add("highlight");
            }

            // Handle "Köp" button logic
            if (button.textContent.includes("Köp")) {
                const productName = parentDiv.querySelector("p").textContent;
                const highlightedButton = parentDiv.querySelector(".highlight");
                const quantity = highlightedButton ? parseInt(highlightedButton.textContent) : 1;

                addToCart(productName, quantity);
            }
        }
    });
});

let cart = {};

function addToCart(productName, quantity) {
    cart[productName] = (cart[productName] || 0) + quantity;
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.querySelector(".varukorg ul");
    cartList.innerHTML = "";

    for (let product in cart) {
        const listItem = document.createElement("li");
        listItem.textContent = `${cart[product]}x ${product}`;
        cartList.appendChild(listItem);
    }
}