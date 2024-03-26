const express = require("express");
const userRouter = require("./controllers/users");
const middleware = require("./utils/middleware");
require("express-async-errors");

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;
