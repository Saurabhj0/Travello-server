let express=require("express");

let app = express();

let cors = require("cors");

let bodyparser = require("body-parser");

app.use( cors() );

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

app.use("/getlogin",require("./user/getlogin"));

app.use("/createuser",require("./user/createuser"));

app.use("/checkuser",require("./user/checkuser"));

app.use("/Searchcity",require("./destinations/searchcity"));

let port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("server started");
});