/**
 * 
 * db.config.js
 * desc:
 * 
 * 
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */

// Dependencies
import dotenv from 'dotenv';
import { Secret } from 'jsonwebtoken';
dotenv.config();

const jsonWebTokenKey: Secret = String(process.env.JSON_WEB_TOKEN_KEY);

export {
    jsonWebTokenKey
}