require("dotenv").config();
// Express initialization
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Passport configuration
const passport = require("passport");
require("./services/passport");

// Mongoose Connection
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/test");

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require("morgan")("dev"));

// Serve Static
app.use(express.static("app/build"));

app.use(require("./routes"));

app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
    console.log(`Dev app url https://localhost:${PORT}/`)
    console.log(`Dev api url https://localhost:${PORT}/`)
});
