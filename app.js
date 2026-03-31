const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const studentRoutes = require("./routes/Studentroutes");

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/students", studentRoutes);

// server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});