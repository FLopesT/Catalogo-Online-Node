const express = require("express");
const PORT = 3000;
const app = express();
//const bodyParser = require("body-parser");
const storeRoute = require("./routes/store");
const storeFunctions = require("./store/storeContent").functions;

app.get("/", (req, res) => { //gera o arquivo index com todos os produtos
    let content = storeFunctions.allProducts(true);
    res.render("index", { content });
});

app.use("/store", storeRoute);
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log("Servidor Rodando na porta " + PORT + "...");
})

