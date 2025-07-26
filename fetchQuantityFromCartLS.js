import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProducts = getCartProductFromLS();
    let  exsistingProduct = cartProducts.find((curProd) => curProd.id === id);
    
    let quantity = 1;
    if (exsistingProduct) {
        quantity = exsistingProduct.quantity;
        price = exsistingProduct.price;
    }


    return {quantity, price};
};