import './style.css';  
import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';


//call the function named "showProductContainer" that takes an array of products as input.
showProductContainer(products);