const express = require("express");
const PORT = 3000;
const app = express();
//const bodyParser = require("body-parser");
const storeRoute = require("./routes/store");

app.use("/", storeRoute);
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log("Servidor Rodando na porta " + PORT + "...");
})

