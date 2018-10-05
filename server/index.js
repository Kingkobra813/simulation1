const express = require("express");
const bodyParser = require("body-parser");
const massive = require('massive');
const cors = require('cors')
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors())

//endpoints

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.listen(3005, () => {
    console.log("listinging on 3005");
});

