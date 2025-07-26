import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    price = price.replace("₹", "")

    let exsistingProd = arrLocalStorageProduct.find(
        (currProd) => currProd.id === id
    );

    if(exsistingProd && quantity > 1) {
        quantity = Number(exsistingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};
        updatedCart = arrLocalStorageProduct.map((currProd) => {
            return (currProd.id === id) ? updatedCart : currProd;
        });
        localStorage.setItem(
            "cartProductLS", 
            JSON.stringify(updatedCart)
        );
        showToast("add",id);
    }
 
    if(exsistingProd) {
        return false;
    }


    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem(
        "cartProductLS", 
        JSON.stringify(arrLocalStorageProduct)
    );
   
    // console.log(quantity, price);

    updateCartValue(arrLocalStorageProduct);

    showToast("add",id);
};