const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//require in routes when made
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
