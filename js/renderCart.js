import { cart } from "./data.js";

function renderCart() {
    const cartContainer = document.querySelector(".cart-list");    
    cartContainer.innerHTML = "";
    console.log(cart)
    if(cart.length === 0) {
        cartContainer.textContent = 'Корзина пуста';
    } else {
        cart.forEach(cartItem => {
            const cartItemWrapper = document.createElement("div");
            cartItemWrapper.classList.add("cart-item");

            const name = document.createElement("span");
            name.classList.add("cart-item-name");
            name.textContent = cartItem.name;

            const price = document.createElement("span");
            price.classList.add("cart-item-price");
            price.textContent = cartItem.price + " руб.";

            const removeButton = document.createElement("button");
            removeButton.classList.add("cart-item-remove");
            removeButton.textContent = "Удалить";

            cartItemWrapper.append(name, price, removeButton);
            cartContainer.appendChild(cartItemWrapper);
        }); 
    }
} 

export default renderCart;