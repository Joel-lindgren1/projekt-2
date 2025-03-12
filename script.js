let cherry1=document.querySelector("cherry1")
let cherry10=document.querySelector("cherry10")
let köpcherry=document.querySelector("köpcherry")

let blueberry1=document.querySelector("blueberry1")
let blueberry10=document.querySelector("blueberry10")
let köplueberry=document.querySelector("köpblueberry")

let citrus1=document.querySelector("citrus1")
let citrus10=document.querySelector("citrus10")
let köpcitrus=document.querySelector("köpcitrus")

let tropical1=document.querySelector("tropical1")
let tropical10=document.querySelector("tropical10")
let köptropical=document.querySelector("köptropical")

const container = document.querySelector(".varukorg ul");

function addItemToCart(itemName) {
    const newElement = document.createElement("li");
    newElement.textContent = itemName;
    container.appendChild(newElement);
}


document.querySelector("#produkter").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        const product = button.parentElement.querySelector("p").textContent;

        if (button.textContent.includes("Köp")) {
            addItemToCart(product);
        }
    }
});








