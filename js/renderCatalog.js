import { catalog, cart } from "./data.js";
import renderCart from "./renderCart.js";

function renderCatalog() {
    const productsContainer = document.querySelector(".product-list");    

    catalog.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        const img = document.createElement("img");
        img.src = product.img;
        img.style.width = "150px";
        img.style.height = "100px";
        img.style.objectFit = "contain";
        img.alt = product.name;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = product.price + " руб.";

        const button = document.createElement("button");
        button.classList.add("add-to-cart");
        button.textContent = "В корзину";
        button.addEventListener('click', function() {
            cart.push(product);
            
            renderCart();
        })

        productCard.append(img, title, price, button);
        productsContainer.appendChild(productCard);
    });
}

export default renderCatalog;