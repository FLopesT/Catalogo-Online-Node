const express = require("express");
const router = express.Router();
const storeFunctions = require("../store/storeContent").functions;

router.get("/", (req, res) => { //gera o arquivo index com todos os produtos
    let content = storeFunctions.allProducts(true);
    res.render("index", { content });
});

let categorys = storeFunctions.allCategorys();
let products = storeFunctions.allProducts();

categorys.forEach(item => {
    router.get("/category/" + item, (req, res) => {
        let catg = item
        let content = storeFunctions.findCP(catg);
        res.render("category", { content });
    });
});

products.forEach(item => {
    router.get("/product/" + item, (req, res) => {
        let content = storeFunctions.getProduct(item);
        res.render("product", { content });
    });
});

module.exports = router;