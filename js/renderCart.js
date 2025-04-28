import { cart } from "./data.js";

function renderCart() {
    const cartContainer = document.querySelector(".cart-list");    
    cartContainer.innerHTML = "";

    const storedCart = localStorage.getItem('data');
    let currentCart = []; 

    if (storedCart) {
        currentCart = JSON.parse(storedCart); 
    }

    if (currentCart.length === 0) { 
        cartContainer.textContent = 'Корзина пуста';
    } else {
        currentCart.forEach((cartItem, index) => {
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
            removeButton.addEventListener('click', function() {
                currentCart.splice(index, 1);
                localStorage.setItem('data', JSON.stringify(currentCart)); 
                renderCart(); 
            });

            cartItemWrapper.append(name, price, removeButton);
            cartContainer.appendChild(cartItemWrapper);
        }); 
    }
}

export default renderCart;
