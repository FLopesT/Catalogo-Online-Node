const express = require("express");
const PORT = 3000;
const app = express();
//const bodyParser = require("body-parser");
const storeFunctions = require("./store/store").functions;

function routeGenerator() {   //gera rotas para categorias e produtos.
    let categorys = storeFunctions.allCategorys();
    let products = storeFunctions.allProducts();
    categorys.forEach(item => {
        app.get("/category/" + item, (req, res) => {
            let catg = item
            let content = storeFunctions.findCP(catg);
            res.render("category", { content });
        });
    });
    products.forEach(item => {
        app.get("/product/" + item, (req, res) => {
            let content = storeFunctions.getProduct(item);
            res.render("product", { content });
        });
    });
};

app.get("/", (req, res) => { //gera o arquivo index com todos os produtos
    let content = storeFunctions.allProducts(true);
    res.render("index", { content });
});

routeGenerator();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log("Servidor Rodando na porta " + PORT + "...");
})

