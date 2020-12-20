const express = require("express");
const app = express();
const path = require("path"); // relative to windows or Mac paths
const bodyParser = require("body-parser");

const router = require("./routes/routing");




// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser());

app.use("/", router);



app.listen(8080, () => {
    console.log("App at ports", 8080);
})