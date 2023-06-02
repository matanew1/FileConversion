import express from 'express';
import middlewares from './middlewares/middleware.js';
import mainRouter from './routers/mainRouter.js';
import fileRouter from './routers/fileRouter.js';
import { connectDB } from './models/database.js';

// init app
const app = express();

// connect to database
connectDB();

// use middlewares
app.use(middlewares);

app.use("/", mainRouter, fileRouter);

export default app;