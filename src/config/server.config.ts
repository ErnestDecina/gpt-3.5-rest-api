/**
 * 
 * server.config.js
 * desc:
 * 
 * 
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */

// Dependencies
import dotenv from 'dotenv';
dotenv.config();

const api_port: number = Number(process.env.API_PORT);

export {
    api_port
}