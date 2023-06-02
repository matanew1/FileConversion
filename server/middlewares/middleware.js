const { json, urlencoded } = require('express');
const cors = require('cors');

/**
 * Middleware functions for request body parsing and CORS handling.
 * @type {Array<Function>} - An array of middleware functions.
 */
const middlewares = [
  json(),
  urlencoded({ extended: true }),
  cors()
];

module.exports = middlewares;
