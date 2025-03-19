document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".varukorg ul");

    document.querySelector("#produkter").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON" && event.target.textContent.includes("Köp")) {
            const parentDiv = event.target.parentElement;
            const productName = parentDiv.querySelector("p").textContent;
            const listItem = document.createElement("li");
            listItem.textContent = productName;
            cartContainer.appendChild(listItem);
        }
    });
});
