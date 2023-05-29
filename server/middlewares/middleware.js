import { json, urlencoded } from 'express';
import cors from 'cors';

/**
 * Middleware functions for request body parsing and CORS handling.
 * @type {Array<Function>} - An array of middleware functions.
 */
const middlewares = [
  json(),
  urlencoded({ extended: true }),
  cors()
];

export default middlewares;
