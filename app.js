const express = require("express");
const app = new express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const corst = require("cors");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

//Middleware implement

//Backend route

// Frontend route define

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client-side", "dist", "index.html"));
});

module.exports = app;
