const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./Config/dbConnection");
const { routes } = require("./Config/routes");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "OPTIONS, GET, POST, PUT, DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
dbConnection();
app.use("/Images", express.static("Images"));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server is runnig in the port ${port}`);
});
