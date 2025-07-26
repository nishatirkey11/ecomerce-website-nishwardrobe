import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if(!products || products.length === 0) {
        return false;
    }

    products.forEach((curProd) => {
        const {brand, category, description, id, image, price, stock} = curProd;

            const productClone = document.importNode(productTemplate.content, true);

            productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
            productClone.querySelector(".category").textContent = category;
            productClone.querySelector(".productName").textContent = description;
            productClone.querySelector(".productImage").src = image;
            productClone.querySelector(".productImage").alt = category;
            productClone.querySelector(".productStock").textContent = stock;
            productClone.querySelector(".productDescription").textContent = category;
            productClone.querySelector(".productPrice").textContent = `₹${price}`;
            productClone.querySelector(".productActualPrice").textContent = `₹${price * 4}`;
            productClone.querySelector(".stockElement").addEventListener('click',(event) => {
                homeQuantityToggle(event, id, stock);
            });
            
            
            productClone.querySelector(".add-to-cart-button").addEventListener("click",(event) => {
                addToCart(event, id, stock);
            });
            
            productContainer.append(productClone);
    });    
};



