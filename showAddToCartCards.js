import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});

console.log(filterProducts);

// to update the addToCart page

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price} = curProd;

        let productClone = document.importNode(templateContainer.content, true);
        

        const lsActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;

        productClone.querySelector(".stockElement")
        .addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });
        
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProductFromCart(id));

        cartElement.appendChild(productClone);
    });
};

//showing the cartProducts
showCartProduct();

//calculate the card total in our cartProductspage
updateCartProductTotal();



