const express = require('express');
const middlewares = require('./middlewares/middleware.js');
const mainRouter = require('./routers/mainRouter.js');
const fileRouter = require('./routers/fileRouter.js');

// init app
const app = express();

// use middlewares
app.use(middlewares);

app.use("/", mainRouter, fileRouter);

module.exports = app;