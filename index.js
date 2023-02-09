const express = require("express");
const cors = require("cors");

const { port } = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./api/routes"));


app.listen(port, () => {
  console.log("API running on port", port);
});