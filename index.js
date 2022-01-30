const express = require("express");
const PORT = 3000;
const app = express();
//const path = require("path"); já incluida na nova versão xpress
const bodyParser = require("body-parser");
const storeFunctions = require("./store/store").functions;
//const apiRoute = require("./routes/api");//importando arquivo api de rotas

function routeGenerator() {   //gerando rotas para categorias e produtos.
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

app.get("/", (req, res) => {
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

