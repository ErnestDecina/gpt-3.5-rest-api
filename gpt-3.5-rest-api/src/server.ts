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
import express, { Express } from 'express';
import { createExpressApp } from "./utils/server";
import { api_port } from './config/server.config';

// Create express application
const app: express.Express = createExpressApp();

// Listen on port
app.listen(api_port, () => {
    console.log(`Server is running at http://localhost:${api_port}`);
});

export {
    app
};