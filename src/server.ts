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

// Routes
import { invalidRoute } from './routes/invalidRoute';
import { apiRoute } from './routes/api/api';

// Create Express application
const app: Express = express();

app.use('/api', apiRoute);
app.use('/', invalidRoute);

// Listen on port
app.listen(api_port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${api_port}`);
});

export {
    app
};