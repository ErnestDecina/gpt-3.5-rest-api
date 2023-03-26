/**
 * 
 * server.ts
 * desc:
 * 
 * 
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */

// Dependencies
import express, { Express, Request, Response } from 'express';
import { api_port } from './config/config';
import bodyParser = require("body-parser");

// Routes
import { invalidRoute } from './routes/invalidRoute';
import { apiRoute } from './routes/api';

// Create Express application
const app: Express = express();
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoute);
app.use('/', invalidRoute);

// Listen on port
app.listen(api_port, () => {
    console.log(`Server is running at http://localhost:${api_port}`);
});

export {
    app
};