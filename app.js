const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
require('./models/associations');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const path = require('path');
const app = express();

require("./config/database");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(
    `Worker running on http://localhost:${PORT}`
  );
});
