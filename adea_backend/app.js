const express = require("express");
//const bodyParser = require("body-parser");
const db = require("./models/mongoose");
const cors = require("cors");
const path = require("path");
const fileUpLoad = require('express-fileupload');
const api = require("./routes/api");
const app = express();

app.use(fileUpLoad());
app.use(cors());
app.options("*", cors());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("", api);
const port = 3002;
app.listen(port, () => console.log(`app listening on port ${port}!`));