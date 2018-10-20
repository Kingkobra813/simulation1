const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

const controller = require("./controller");
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

//endpoints
app.get("/api/inventory", controller.getProducts);
app.get("/api/product/:id", controller.getOneProduct);
app.post("/api/product", controller.makeProduct);
app.delete("/api/product/:id", controller.deleteProduct);
app.put("/api/product/:id", controller.updateProduct);

app.listen(3005, () => {
  console.log("listinging on 3005");
});
