var express = require("express");
var routes = require("./routes");
var path = require("path");
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.set("port", process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(app.get("port"), function () {
  console.log("listen at " + app.get("port"));
});

routes(app);
