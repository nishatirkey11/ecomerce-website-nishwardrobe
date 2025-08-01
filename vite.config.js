// vite.config.js
import { defineConfig, formatPostcssSourceMap } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
                about: resolve(__dirname, "about.html"), // Additional HTML pages
                contact: resolve(__dirname, "contact.html"),
                shop: resolve(__dirname, "shop.html"),
                addToCart: resolve(__dirname, "addToCart.html"),
                // Add more entry points for other HTML files as needed
            },
        },
    },
});
